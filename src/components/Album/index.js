import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { List, Card } from 'antd';
import style from "./style.less";

export default class Album extends Component {
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

            ]
        }
    }
    render() {
        const { list } = this.state
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Card
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                         >Card content</Card>
                    </List.Item>
                )}
            /> 
        )
    }
}