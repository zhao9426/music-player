import React, { Component } from "react";
import "./player.less";
export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            src: "https://pmusic.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%8D%E5%93%AD.mp3",
            tracks: [],
            sources: [],
            isPlay: false,
            isMute: false,
            leftTime: '',
            currentTime: 0,
            progress: 0,
            volumn: 0,
        }
        this.timer = null;
    }

    componentDidMount() {
    }


    componentWillMount() {
        this.timer && clearInterval(this.timer);
    }

    handleplay(isPlay) {
        if (isPlay) {
            this.pause();
        } else {
            this.play();
        }
        this.setState({
            isPlay: !isPlay
        })
    }

    play() {
        this.refs.AUDIO.play();
        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = setInterval(() => {
            let leftTime = this.refs.AUDIO && this.refs.AUDIO.currentTime || 0;
            this.setState({
                leftTime: this.changeTime(leftTime),
                progress: leftTime/this.refs.AUDIO.duration*100
            });
        }, 1000)
    }

    pause() {
        this.refs.AUDIO.pause();
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    changeTime(time) {
        time = parseInt(time);
        let miniutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${miniutes}:${seconds}`;
    }

    mute(){
        if( this.refs.AUDIO.isMute ){
            this.refs.AUDIO.volume = 1;
            this.value = '静音';
            this.refs.AUDIO.isMute = false;
        }else{
            this.refs.AUDIO.volume = 0;
            this.value = '取消静音';
            this.refs.AUDIO.isMute = true;
        }
    } 

    changeVolumnHandler(progress){
        console.log(progress, "v")
        this.refs.AUDIO.volume = progress;
        this.setState({
            volumn: progress*100
        })
    }

    changeProgressHandler(progress){
        let time = this.refs.AUDIO.duration;
        this.refs.AUDIO.currentTime = time * progress;
        console.log(progress, "p")
        this.setState({
            progress: progress*100

        })
    }


    render() {
        const { src, tracks, sources, leftTime, progress, volumn } = this.state
        return (
            <div className="player-page">
                <audio src={src} ref="AUDIO">
                    {sources && sources.length > 0 && sources.maps(s => {
                        return < source src={s.src} type={s.type || "audio/wav"} />
                    })}

                    {tracks && tracks.length > 0 && tracks.map(t => {
                        return <track kind={t.captions || "captions"} src={t.src} srclang={t.lang} label={t.label} />
                    })}
                </audio>
                <i className="fa fa-angle-left fa-lg" onClick={this.playPrev} style={{ marginRight: 30 }}></i>
                <i className={`fa fa-${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.handleplay.bind(this, this.state.isPlay)} ></i>
                <i className="fa fa-angle-right fa-lg" onClick={this.playNext} style={{ marginLeft: 30 }}></i>
                <div className="left-time -col-auto" >-{this.state.leftTime}
                    <div className="volume-container">
                        <i className="fa fa-volume-up"  style={{ marginLeft: 70, marginTop: -10 }}></i>
                        <div className="volume-wrapper">
                            <Progress
                                progress={this.state.volumn}
                                onProgressChange={(progress) => this.changeVolumnHandler(progress)}
                                barColor="#aaa"
                            >
                            </Progress>
                        </div>
                    </div>
                </div>

                <div style={{height:10, lineHeight:'10px', marginTop:50}}>
                    <Progress
                        progress={this.state.progress}
                        onProgressChange={(progress) => this.changeProgressHandler(progress)}
                        barColor='#FF0000'
                    >
                    </Progress>
                </div>

                <input type="button" value="00：00：00" />
                    <input type="button" onClick={this.mute.bind(this)}  value="静音" />
                    <input type="button" value="全屏" />
                </div>
                )
    }
}