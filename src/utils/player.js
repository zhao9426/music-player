export class MusicPlayer {
  constructor(obj) {
    this.state = {};
    this.animationFrameId = null;
    this.source = null;
    this.count = 0;
    this.size = obj.size;
    this.AC = new AudioContext();
    this.AnalyserNode = this.AC.createAnalyser();
    this.AnalyserNode.fftSize = this.size * 2;
    this.GainNode = this.AC.createGain();
    this.AnalyserNode.connect(this.GainNode);
    console.log(this.GainNode);
   // this.GainNode.connect(this.AC.destionation);
    this.XHR = new XMLHttpRequest();
    this.visualizer = obj.visualizer;
  }

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

  visualize() {
    const arr = new Uint8Array(this.AnalyserNode.frequencyBinCount);
    this.AnalyserNode.getByteFrequencyData(arr);
    const self = this;
    function v() {
      self.AnalyserNode.getByteFrequencyData(arr);
      self.visualizer(arr);
      requestAnimationFrame(v);
    }
    requestAnimationFrame(v);
  }
}

export default MusicPlayer