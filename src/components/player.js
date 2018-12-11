import React, { Component } from "react";
export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: "https://pmusic.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%8D%E5%93%AD.mp3",
            tracks: [],
            sources: []
        }
        this.timer = null; 
    }

    componentDidMount(){
      /*   this.timer = setInterval(() => {
            const A = this.refs.AUDIO
            console.log(this.refs.AUDIO.currentTime, this.refs.AUDIO.duration, "rfs")
            console.log(this.refs.AUDIO.volume, "volume", this.refs.AUDIO.muted, this.refs.AUDIO.autoBuffer)
            console.log(A.paused, A.error, A.ended, A.currentSrc)
        }, 1000); */
    }

    componentWillMount() {
        // this.timer && clearInterval(this.timer);
    }

    play(){
        this.refs.AUDIO.play();
    }

    pause(){
        this.refs.AUDIO.pause();
    }
    
    render(){
        const { src, tracks, sources } = this.state
        return ( 
            <div>
                <button onClick={this.play.bind(this)}>Play</button>
                <button onClick={this.pause.bind(this)}>Paused</button>
                <audio loop src={src} ref="AUDIO">
                    Your browser does not support the <code>audio</code> element.
                    { sources && sources.length > 0 && sources.map(s => {
                        return <source src={s.src} type={s.type || "audio/wav"} />
                    })}
                    
                    { tracks && tracks.length > 0 && tracks.map(t => {
                        return <track kind={t.captions || "captions"} src={t.src} srclang={t.lang} label={t.label} />
                    })}
                </audio>
            </div> 
        )
    }
}