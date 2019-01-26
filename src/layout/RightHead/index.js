import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.less";

export default class RightHead extends Component {
    render() {
        const { showLogin } = this.props
        return (
            <div className={'right-head'}>
                <Link to="/mylist">我的音乐</Link>
                <span className="login" onClick={showLogin} >登录</span>
                <Link className="join" to="/join">注册</Link>
            </div>
        )
    }
}