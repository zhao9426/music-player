import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./style.less";

export default class RightHead extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/mylist">我的音乐</Link>
                <Link className="login" to="/login">登录</Link>
                <Link className="join" to="/join">注册</Link>
            </Fragment>
        )
    }
}