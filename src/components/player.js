import React, { Component } from "react";
export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: "https://pmusic.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%8D%E5%93%AD.mp3",
            tracks: [],
            sources: []
        }
    }
    
    render(){
        const { src, tracks, sources } = this.state
        return ( 
            <div>
                <audio controls="controls" src={src}>
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