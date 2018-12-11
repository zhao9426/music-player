import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./style.less";

export default class PlaySong extends Component {
    constructor(props){
        super(props);
        this.state={
            list: [
                {
                    id:1,
                    title:'不哭',
                    artist:'火箭少女101Sunnee ',
                    album: '真心',
                    file:'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover:'../../static/images/buku.png',
                    des:'我不哭，我很开心'
                }
            ]
        }
    }
    render(){
        const { list } = this.state;
        return (
            <Fragment>
                {
                    list.map((l) => {
                        return (
                            <div className="play-body" key={l}>
                                <div className="play-left">
                                   <img src={l.cover} style={{marginTop:20}}/>
                                </div>
                                <div className="play-center">
                                    <h1 style={{marginTop:20}}>{l.title}</h1>
                                    <div className="play-center-header">
                                        <h5>专辑：<span>{l.des}</span></h5>
                                        <h5>歌手：<span>{l.artist}</span></h5>
                                    </div>
                                    <div className="play-center-body">{l.des}</div>
                                </div>
                                <div className="play-right">
                                        特效
                                </div>

                            </div>
                        );
                    })
                }
            </Fragment>
        )
    }
}