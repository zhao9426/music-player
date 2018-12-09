import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class LeftHead extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Fragment>
                <Link to="/">发现音乐</Link>
                <Link to="/bank">热门榜单</Link>
            </Fragment>
        )
    }
}