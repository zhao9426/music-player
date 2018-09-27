import React,{Component} from 'react'
import Progress from '../Components/progress'
import './player.less';
import {Link} from 'react-router'
import Pubsub from 'pubsub-js'
let duration=null;
class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            progress:0 ,
            volume:0,
            isPlay:true,
            leftTime:''
        }
    }
    playPrev(){
        Pubsub.publish('PLAY_PREV');
    }
    playNext(){
        Pubsub.publish('PLAY_NEXT');
    }
    formatTime(time){
        time=Math.floor(time);
        let miniutes=Math.floor(time/60);
        let seconds=Math.floor(time%60);
        seconds=seconds<10 ? `0${seconds}` :seconds;
        return `${miniutes}:${seconds}`;
    }
    componentDidMount(){
        $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
            duration=e.jPlayer.status.duration;
            this.setState({
                volume:e.jPlayer.options.volume*100,
                progress: e.jPlayer.status.currentPercentAbsolute,
                leftTime:this.formatTime(duration*(1-e.jPlayer.status.currentPercentAbsolute/100))
            });
        });
    }
    componentwillunMount(){
        $('#player').unbind($.jplayer.event.timupdate);
    }
    progressChangeHandler(progress){
        $('#player').jPlayer('play',duration*progress)
    }
    changeVolumeHandler(progress){
        $('#player').jPlayer('volume',progress)
    }
    play(){
        if(this.state.isPlay){
            $('#player').jPlayer('pause');
        }else{
            $('#player').jPlayer('play');
        }
        this.setState({
            isPlay:!this.state.isPlay
        })
    }
    render(){
        return(
          <div className="player-page">
              <h1 className="caption"><Link to="/list">我的私人音乐坊&gt;</Link></h1>
              <div className="fenhang"> 
                  <div className="controll-wrapper">
                      <h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                      <h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                      <div className="left-time -col-auto">-{this.state.leftTime}
                        <div className="volume-container">
                            <i className="fa fa-volume-up" style={{marginLeft:70,marginTop:-10}}>
                            </i>
                            <div className="volume-wrapper">
                                   <Progress 
                                   progress={
                                       this.state.volume
                                   }
                                   onProgressChange={
                                    this.changeVolumeHandler
                                }
                                barColor="#aaa">
                                   </Progress>
                            </div>
                        </div>
                      </div>
                      <div style={{height:10,lineHeight:'10px',marginTop:10}}>
                             <Progress
                             progress={this.state.progress}
                             onProgressChange={
                                 this.progressChangeHandler
                             }
                             barColor='#FF0000'
                             >
                             </Progress>
                      </div>
                    </div>
                    <div className="mt5 row">
                                <i className="fa fa-angle-left fa-lg" onClick={this.playPrev} style={{marginRight:30}}></i> 
                                <i className={`fa fa-${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play.bind(this)} style={{marginLeft:5}} ></i> 
                                <i className="fa fa-angle-right fa-lg" onClick={this.playNext} style={{marginLeft:30}}></i> 
                    </div>
                    <div className="over">
                      <i className="fa fa-refresh"></i> 
                    </div>
                </div>
                
                <div className="over2">
                    <img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title} style={{ borderRadius:100}}/>
                </div>
           </div>      
        );
    }
}
export default Player;