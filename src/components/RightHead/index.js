import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class RightHead extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/mylist">我的音乐</Link>
                <Link to="/login">登录</Link>
                <Link to="/join">注册</Link>
            </Fragment>
        )
    }
}