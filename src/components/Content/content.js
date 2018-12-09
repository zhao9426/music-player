import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import  content from "./content.less";
export default class Content extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            <Row>
            <Col span={20}>精选歌单</Col>
            <Col span={4}>更多</Col>
            </Row>
            </div>
        )
    }
}