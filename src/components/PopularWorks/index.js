import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col } from 'antd';
import { Skeleton, Menu, Icon } from 'antd';
import { List } from 'antd';
import style from "./style.less";

export default class PopularWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
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
    
                ]
            }
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        const { list } = this.state;
        return (
                <div>
                    <List
                        itemLayout="horizontal"
                        dataSource={list}
                        renderItem={item => (
                            <List.Item
                            actions={[<a>
                                <i className="fa fa-caret-square-o-right" style={{ color: '#7F7F7F' }}></i>
                            </a>,
                            <a>
                                <i className="fa fa-download" style={{ color: '#7F7F7F' }}></i>
                            </a>,
                            <a>
                                <i className="fa fa-inbox" style={{ color: '#7F7F7F' }}></i>
                            </a>,
                            <a>
                            时间
                            </a>]}
                            >
                            <div>{item.id}</div>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="专辑"
                                />
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </div>
        )
    }
}