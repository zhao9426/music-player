import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Dropdown,
  Icon,
  Avatar
} from 'antd'
import "./style.less";

export default class RightHead extends Component {
    render() {
        const { showLogin, hstore } = this.props
        let { isLogin, loginUser } = hstore
        return (
          <div className="head-menu right-head">
          { isLogin &&  
          <Dropdown overlay = {
              < Menu >
                <Menu.Item>{loginUser.name}</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key = "0">
                  <Link className = "menu-item" to = "/my" > 我的音乐 </Link>
                </Menu.Item>
                <Menu.Item key = "1">
                  <Link className = "menu-item" to = "/manage" >管理</Link>
                </Menu.Item>
                <Menu.Item key = "2" >
                <a href = "#" >退出</a> 
                </Menu.Item> 
            </Menu>
            }
              trigger = {
                  ['click']
                } >
              <a className = "ant-dropdown-link" >
                <Avatar 
                shape = "square"
                src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Icon type = "down" style={{ paddingLeft: 8, color: "#fff"}} />
              </a>
            </Dropdown>}
           
            { !isLogin && <Fragment>
              <div className="menu-item" onClick={showLogin}>
                登录
              </div>
              <div>
                <Link className="menu-item" to="/register">
                  注册
                </Link>
              </div> 
            </Fragment>}
            
          </div>
        );
    }
}