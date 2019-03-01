import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../headMenu.less";
export default class LeftHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='head-menu'>
                <Link className="menu-item" to="/">发现音乐</Link>
                <Link className="menu-item" to="/bank">热门榜单</Link>
            </div>
        )
    }
}