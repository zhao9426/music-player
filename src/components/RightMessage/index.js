import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./style.less";
import { List, Avatar, Skeleton } from 'antd';
import { Button, Radio, Icon } from 'antd';

export default class RightMessage extends Component {
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
                }
            ],
            size: 'small',
        }
    }

    handleSizeChange(e) {
        this.setState({ size: e.target.value });
    }

    render() {
        const { list } = this.state;
        const size = this.state.size;
        return (
            <Fragment>
                <div className="right">
                    <List
                        header={
                            <List.Item actions={[
                                <a>
                                    <Button type="primary" icon="caret-right" size={size}>播放</Button>
                                </a>,
                            ]}>
                                歌曲列表
                            </List.Item>
                            
                        }
                        itemLayout="horizontal"
                        dataSource={list}
                        renderItem={item => (
                            <List.Item actions={[
                                <a>
                                    <i className="fa fa-caret-square-o-right" style={{ color: '#7F7F7F' }}></i>
                                </a>,
                                <a>
                                    <i className="fa fa-download" style={{ color: '#7F7F7F' }}></i>
                                </a>,
                                <a>
                                    <i className="fa fa-inbox" style={{ color: '#7F7F7F' }}></i>
                                </a>,
                                <div>
                                时间
                                </div>
                            ]}>
                            <div>{item.id}</div>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    title={<a href="song">{item.title}</a>}
                                    description={item.artist}
                                />
                            </Skeleton>
                                </List.Item>
                                
                        )}
                    />
                </div>
            </Fragment>
        )
    }
}