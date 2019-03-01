import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.less";

export default class RightHead extends Component {
    render() {
        const { showLogin } = this.props
        return (
          <div className="head-menu right-head">
            <Link className="menu-item" to="/mylist">
              我的音乐
            </Link>
            <span className="menu-item" onClick={showLogin}>
              登录
            </span>
            <Link className="menu-item" to="/join">
              注册
            </Link>
          </div>
        );
    }
}