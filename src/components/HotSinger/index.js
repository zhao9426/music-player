import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.less";
import { List } from 'antd';

export default class HotSinger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5, 6, 7]
        }
    }
    render() {
        const { list } = this.state;
        return (
            <Fragment>
                <div className="song-list-header">
                    <h2><span className="sp">热门</span>歌手</h2>
                    <h5 className="more">更多</h5>
                </div>
                {
                    <List
                        bordered
                        dataSource={list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                }
            </Fragment>
        )
    }
}