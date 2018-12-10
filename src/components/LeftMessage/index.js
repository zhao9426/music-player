import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Radio, Icon } from 'antd';
import { Avatar } from 'antd';
import style from "./style.less";
export default class LeftMessage extends Component {
    constructor(props){
        super(props);
        this.state={
            size: 'small',
        }
    }

    handleSizeChange  (e)  {
        this.setState({ size: e.target.value });
      }
    
    render(){
        const size = this.state.size;
        return (
            <Fragment>
                <Avatar shape="square" size={150} icon="user" />
                <Button type="primary" icon="inbox"  size={size}>分享</Button>
                <p><span>名称</span></p>
                <p><span>创建人</span></p>
                <p><span>心情</span></p>
                <p><span>更新时间</span></p>
            </Fragment>
        )
    }
}