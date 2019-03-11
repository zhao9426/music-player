import React, { Component } from 'react';
import { Layout,  Menu, List, Icon } from 'antd';
import './styles.less';

const { Content, Sider } = Layout;
const { Item } = Menu;

const MENUS = [{
    name: "热歌",
    type: 1
},{
    name: "新歌",
    type: 2
},{
    name: '欧美',
    type: 3
},{
    name: '大陆',
    type: 4
},{
    name: '港台',
    type: 5
}]

const listData = [{
    name: "绿色",
    id: 1
},{
    name: "没有意外",
    id: 2
}]

export default class BankPage extends Component {

                 renderListItem(item) {
                     return (<List.Item key={item.id}>{item.name}</List.Item>)
                 }

                 render() {
                   return (
                     <Layout className="bank">
                       <div className="wrapper">
                         <Sider
                           width={200}
                           className="bank-menu"
                         >
                           <h2>排行榜</h2>
                           <Menu
                             mode="inline"
                             inlineCollapsed={false}
                             className="menu"
                           >
                             {MENUS.map(m => {
                               return (
                                 <Item key={m.type}>
                                   {m.name}
                                 </Item>
                               );
                             })}
                           </Menu>
                         </Sider>
                         <Content className="bank-list">
                           <h2>欧美</h2>
                           <List
                             size="large"
                             className="song-list"
                             dataSource={listData}
                             renderItem={item =>
                               this.renderListItem(item)
                             }
                             pagination = {{
                                defaultCurrnt: 1,
                                total: 20 
                             }}
                             position="bottom"
                             header={null}
                             footer={null}
                           />
                         </Content>
                       </div>
                     </Layout>
                   );
                 }
               }
