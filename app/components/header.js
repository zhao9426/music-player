import React,{Component} from 'react'
import './header.less'
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Input, AutoComplete } from 'antd';

import {
   Button
  } from 'antd';
  
  const Option = AutoComplete.Option;
  
  function onSelect(value) {
    console.log('onSelect', value);
  }
  
  function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }
  
  function searchResult(query) {
    return (new Array(getRandomInt(5))).join('.').split('.')
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: getRandomInt(200, 100),
      }));
  }
  
  function renderOption(item) {
    return (
      <Option key={item.category} text={item.category}>
        {item.query} 在
        <a
          href={`https://s.taobao.com/search?q=${item.query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.category}
        </a>
        区块中
        <span className="global-search-item-count">约 {item.count} 个结果</span>
      </Option>
    );
  }
  

const MenuItemGroup = Menu.ItemGroup;
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: "home",
            dataSource: [],
        }
    }

    handleSearch  (value)  {
        this.setState({
          dataSource: value ? searchResult(value) : [],
        });
      }
    
    handleClick(e){
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    render(){
        const { dataSource } = this.state;
        return(
            <div>
                <div className="components-header row">
                    <div id="player"></div>
                    <img src="../../static/images/logo.png" alt=""  className="img"/>
                    <h1 className="caption">动感音乐</h1>
                   {/*  <input type="text" name="search" className="search" placeholder="请输入关键字"/> */}
                   <div className="global-search-wrapper" style={{ width: 300 }}>
                    <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={dataSource.map(renderOption)}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                    optionLabelProp="text"
                    >
                    <Input
                        suffix={(
                        <Button className="search-btn" size="large" type="primary">
                            <Icon type="search" />
                        </Button>
                        )}
                    />
                    </AutoComplete>
                </div>
                    <button className="button1">登录</button>
                    <button className="button2">注册</button>
                </div>

                <Menu
                onClick={this.handleClick.bind(this)}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark"
                >
                <Row>
                <Col span={8}>
                <Row>
                <Col span={9}></Col>
                <Col span={5}>
                <Menu.Item key="home">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">首页</a>
                </Menu.Item>
                </Col>
                <Col span={10}>
                <Menu.Item key="app" disabled>
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">榜单</a>
                </Menu.Item>
                </Col>
                </Row>
                </Col>
                <Col span={6} offset={10}>
                <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">我的音乐</a>
                </Menu.Item>
                </Col>
                </Row>
               
                
            </Menu>
            </div>
        );
    }
}
export default Header;