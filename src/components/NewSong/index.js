import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.less";
import { Menu, Icon } from 'antd';
import { List, Skeleton } from 'antd';
import { Pagination } from 'antd';

export default class NewSong extends Component {
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
            current: 'mail',
        }
    }

    render() {
        const MenuItemGroup = Menu.ItemGroup;
        const { list } = this.state;
        return (
            <Fragment>
                <div className="new-song-header" >
                    <h2><span className="sp">新歌</span>首发</h2>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        className="nav"
                    >
                        <Menu.Item>
                            华语
                        </Menu.Item>
                        <Menu.Item>
                            欧语
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#">韩国</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#">日本</a>
                        </Menu.Item>
                    </Menu>
                    <h5 className="more">更多</h5>
                </div>
                <div className="new-song-body">
                    {
                        <List
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
                                    <a>
                                        时间
                            </a>
                                ]}>
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            title={<a href="song">{item.title}</a>}
                                        />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    }
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </Fragment>
        )
    }
}