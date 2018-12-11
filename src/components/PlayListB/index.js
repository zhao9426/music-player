import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./style.less";
import {
    List, Avatar, Button, Skeleton,
} from 'antd';

export default class PlayListB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    des: '我不哭，我很开心'
                },
                {
                    id: 2,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover: '../../static/images/buku.png',
                    des: '我不哭，我很开心'
                },
                {
                    id: 3,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover: '../../static/images/buku.png',
                    des: '我不哭，我很开心'
                },
                {
                    id: 4,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover: '../../static/images/buku.png',
                    des: '我不哭，我很开心'
                },
                {
                    id: 5,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover: '../../static/images/buku.png',
                    des: '我不哭，我很开心'
                },
                {
                    id: 6,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover: '../../static/images/buku.png',
                    des: '我不哭，我很开心'
                },
                {
                    id: 7,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover: '../../static/images/buku.png',
                    des: '我不哭，我很开心'
                },
                {
                    id: 8,
                    title: '不哭',
                    artist: '火箭少女101Sunnee ',
                    file: 'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover: '../../static/images/buku.png',
                    des: '我不哭，我很开心'
                },

            ],
        }
    }
    render() {
        const { list } = this.state;
        return (
            <Fragment>
                <List
                    header={
                        <div className="play-header">
                            <h2>播放列表</h2>
                            <a>
                                <i className="fa fa-trash-o" style={{ color: '#7F7F7F' }}></i>
                            </a>
                        </div>}
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <div className="logon-contanier">
                                    <a>
                                        <i className="fa fa-download" style={{ color: '#7F7F7F' }}></i>
                                    </a>,
                                    <a>
                                        <i className="fa fa-trash-o" style={{ color: '#7F7F7F' }}></i>
                                    </a>
                                </div>
                            ]}
                        >
                            <div>{item.id}</div>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta

                                    title={<a href="song">{item.title}</a>}
                                    description={item.artist}
                                />
                            </Skeleton>
                            <div>时间</div>
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}