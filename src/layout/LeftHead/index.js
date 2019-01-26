import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.less";
export default class LeftHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'left-head'}>
                <Link to="/">发现音乐</Link>
                <Link className="hot-list" to="/bank">热门榜单</Link>
            </div>
        )
    }
}