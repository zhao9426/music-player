import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MusicVisualizer extends Component {
         static propTypes = {};

         constructor(props) {
            super(props);
            this.state = {};
            this.source = null;
            this.count = 0;
            this.size = 512;
            this.AC = new AudioContext();
            this.Analyser = this.AC.createAnalyser();
             this.Analyser.fftSize = this.size * 2;
            this.GainNode = this.AC.createGain();
            this.Analyser.connect(this.GainNode);
            console.log(this.GainNode, "LLL");
            
            this.GainNode.connect(this.AC.destionation);
            this.XHR = new XMLHttpRequest();
            this.Visualizer = null;
         }

         source;
         count;
         size;
         AC;
         Analyser;
         GainNode;
         XHR;
         Visualizer;

         load(url, fn) {
           this.XHR.abort();
           this.XHR.open("GET", url);
           this.XHR.responseType = "arraybuffer";
           this.XHR.onload = function() {
             fn(this.XHR.response);
           };
           this.XHR.send();
         }

         decode(arrayBuffer, fn) {
           this.AC.decodeAudioData(
             arrayBuffer,
             function(buffer) {
               fn(buffer);
             },
             function(err) {
               console.error(err);
             }
           );
         }

         play(url) {
           const n = ++this.count;
           this.source && this.source.stop();
           this.load(url, function(arrayBuffer) {
             if (n !== this.count) return;
             arrayBuffer &&
               this.decode(arrayBuffer, function(buffer) {
                 if (n !== this.count) return;
                 const bs = this.AC.createBufferSource();
                 bs.buffer = buffer;
                 bs.connect(this.Analyser);
                 this.source = bs;
                 this.source.start();
               });
           });
         }

         stop() {
           this.source.stop();
         }

         changeVolume(percent) {
           this.GainNode.gain.value = percent * percent;
         }

         visualize(){
              const arr = new Uint8Array(
                this.Analyser.frequencyBinCount
              );
              this.Analyser.getByteFrequencyData(arr);
              const self = this;
              function v() {
                self.Analyser.getByteFrequencyData(arr);
                self.visualizer(arr);
                requestAnimationFrame(v);
              }
              requestAnimationFrame(v);
         }

         render() {
           return <div>Play</div>;
         }
       }

export default MusicVisualizer
