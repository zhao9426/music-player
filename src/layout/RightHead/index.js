import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Dropdown,
  Icon,
  Avatar
} from 'antd';
import isPicture from '../../utils/isPicture';
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
                <Menu.Divider/>{/* 下拉列表分割线 */}
                <Menu.Item key = "my">
                  <Link className = "menu-item" to = "/my" > 我的音乐 </Link>
                </Menu.Item>
                { loginUser.role == 0 &&  <Menu.Item key = "0">
                  <Link className = "menu-item" to = "/manage" >管理</Link>
                </Menu.Item> }
                <Menu.Item key = "2" >
                <a href = "#" onClick={()=> this.props.logout()} >退出</a> 
                </Menu.Item> 
              </Menu>
            }
              trigger = {/* 指定点击之后促发下拉内容*/
                  ['click']
                } 
              >
              <a className = "ant-dropdown-link" >
                <Avatar 
                shape = "square"
                src = {(loginUser.avatar && isPicture(loginUser.avatar)) ? loginUser.avatar : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
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