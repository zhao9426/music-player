import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        }
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                   热门作品
                </Menu.Item>
                <Menu.Item key="app" >
                <a href="../Album/index.js"> 所有专辑</a>
               </Menu.Item>
                <Menu.Item key="alipay">
                    <a href="../">Navigation Four - Link</a>
                </Menu.Item>
            </Menu>
        )
    }
}