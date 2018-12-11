import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import login from "./login.less";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Link to="/">发现音乐</Link>
                <Link className="hot-list" to="/bank">热门榜单</Link>
            </Fragment>
        )
    }
}