import React, { Component } from 'react'
import Header from '../Components/header'
import Login from '../Components/login'
import Player from '../page/player';
import MusicList from '../page/musiclist';
import  MUSIC_LIST  from '../config/musiclist'
import Pubsub from 'pubsub-js'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: MUSIC_LIST,
            current: MUSIC_LIST[0]
        }
    }

    play(song){
        $('#player').jPlayer('setMedia', {
<<<<<<< HEAD
            mp3: song.file
        }).jPlayer('play');
=======
            mp3: song.url
        }).jPlayer('play');

>>>>>>> rebuild project
        this.setState({
            current: song
        });
    }

    playNext(type = 'next'){
<<<<<<< HEAD
        let index = this.findMusicIndex(this.state.current);
=======
        let index = this.findIndex(this.state.current);
>>>>>>> rebuild project
        let len = this.state.list.length;
        let newIndex = index;
        if('next' == type){
            newIndex = (index + 1) % len;
        } else {
            newIndex = (index - 1 + len) % len;
        }
        this.play(this.state.list[newIndex]);
    }

    findIndex(song){
        return this.state.list.indexOf(song);
    }

    componentDidMount() {
        $('#player').jPlayer({
            supplied: 'mp3',
            wmode: 'window'
        });

        this.play(this.state.current)

        $('#player').bind($.jPlayer.event.ended, () => {
            this.playNext("next");
        });

        Pubsub.subscribe('DELETE_MUSIC', (msg, musicItem) => {
            this.setState({
                musicList: this.state.musicList.filter(item => {
                    return item !== musicItem;
                })
            });
        });

        Pubsub.subscribe('PLAY_MUSIC', (msg, song) => {
            this.play(song);
        });

        Pubsub.subscribe('PLAY_PREV', (msg, song) => {
            this.playNext();
        });

        Pubsub.subscribe('PLAY_NEXT', (msg, song) => {
            this.playNext();
        });
    }

    componentwillunMount() {
        Pubsub.unsubscribe('DELETE_MUSIC');
        Pubsub.unsubscribe('PLAY_MUSIC');
        Pubsub.unsubscribe('PLAY_PREV');
        Pubsub.unsubscribe('PLAY_NEXT');
        $('#player').unbind($.jPlayer.event.ended);
    }

    render() {
        return (
            <div id="player">
                <Player/>
                {/* <Header /> */}
                {/* <Login /> */}
                {/* {React.cloneElement(this.props.children, this.state)} */}
            </div>
        );
    }

}