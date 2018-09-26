import React,{Component} from 'react'
import Header from './Components/header'
import Player from './page/player';
import MusicList from './page/musiclist';
import {MUSIC_LIST} from './config/musiclist'
import Pubsub from 'pubsub-js'
import {Router,IndexRoute,Link,Route,hashHistory} from 'react-router'
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            musicList:MUSIC_LIST,
            currentMusicItem:MUSIC_LIST[0]
        }
    }
    playMusic(musicItem){
        console.log(musicItem)
        $('#player').jPlayer('setMedia',{
            mp3:musicItem.file
        }).jPlayer('play');
        this.setState({
            currentMusicItem:musicItem
        });
    }
    playNext(type="next"){
        let index=this.findMusicIndex(this.state.currentMusicItem);
        let newIndex=null;
        let musicListLength=this.state.musicList.length;
        if(type==='next'){
            newIndex=(index+1)%this.state.musicList.length;
        }else{
            newIndex=(index-1+musicListLength)%musicListLength;
        }
        this.playMusic(this.state.musicList[newIndex]);
    }

    findMusicIndex(musicItem){
        return this.state.musicList.indexOf(musicItem);
    } 
    componentDidMount(){
        $('#player').jPlayer({
            supplied:'mp3',
            wmode:'window'
        });
        this.playMusic(this.state.currentMusicItem)

        $('#player').bind($.jPlayer.event.ended, (e)=>{
            console.log(e, "te")
            this.playNext("next");
        });

        Pubsub.subscribe('DELETE_MUSIC',(msg,musicItem)=>{
            this.setState({
                musicList:this.state.musicList.filter(item=>{
                    return item !==musicItem;
                })
            });
        });

        Pubsub.subscribe('PLAY_MUSIC',(msg,musicItem)=>{
            this.playMusic(musicItem);
        });

        Pubsub.subscribe('PLAY_PREV',(msg,musicItem)=>{
            this.playNext();
        });

        Pubsub.subscribe('PLAY_NEXT',(msg,musicItem)=>{
            console.log(musicItem, "fk")
            this.playNext();
        });
    }
    componentwillunMount(){
        Pubsub.unsubscribe('DELETE_MUSIC');
        Pubsub.unsubscribe('PLAY_MUSIC');
        Pubsub.unsubscribe('PLAY_PREV');
        Pubsub.unsubscribe('PLAY_NEXT');
        $('#player').unbind($.jPlayer.event.ended);
    }
    render(){
        return(
            <div>
                <Header/>
                {React.cloneElement(this.props.children,this.state)}
            </div>
        );
    }
}

let duration=null;
class Root extends Component{
    render(){
        return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Player}></IndexRoute>
                <Route path="/list" component={MusicList}></Route>
            </Route>
        </Router>
        );
    }
}
export default Root;