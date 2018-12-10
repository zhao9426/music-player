import React, { Component, Fragment } from "react";
import "./style.less";
import { List, Avatar } from 'antd';

export default class InSinger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id:1,
                    title:'不哭',
                    artist:'火箭少女101Sunnee ',
                    file:'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover:'../../static/images/buku.png',
                    des:'我不哭，我很开心'
                },
                {
                    id:2,
                    title:'不哭',
                    artist:'火箭少女101Sunnee ',
                    file:'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover:'../../static/images/buku.png',
                    des:'我不哭，我很开心'
                },
                {
                    id:3,
                    title:'不哭',
                    artist:'火箭少女101Sunnee ',
                    file:'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover:'../../static/images/buku.png',
                    des:'我不哭，我很开心'
                },
                {
                    id:4,
                    title:'不哭',
                    artist:'火箭少女101Sunnee ',
                    file:'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover:'../../static/images/buku.png',
                    des:'我不哭，我很开心'
                },
                {
                    id:5,
                    title:'不哭',
                    artist:'火箭少女101Sunnee ',
                    file:'http://opiq8wtrv.bkt.clouddn.com/%E4%B8%8D%E5%93%AD.mp3',
                    cover:'../../static/images/buku.png',
                    des:'我不哭，我很开心'
                }
            ]
        }
    }
    render() {
        const { list } = this.state;
        return (
            <Fragment>
                <div className="in-singer-header" >
                    <h2><span className="sp">热门</span>歌手</h2>
                    <h5 className="more">更多</h5>
                </div>
                <div className="in-singer-body">
                {
                    <List
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={item.cover} />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.des}
                        />
                    </List.Item>
                    )}
                    />
                }
                </div>
            </Fragment>
        )
    }
}