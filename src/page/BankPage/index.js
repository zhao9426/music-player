import React, { Component } from "react";
import { Layout, Menu, List, Icon } from "antd";
import { toJS } from 'mobx'
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import "./styles.less";

const { Content, Sider } = Layout;
const { Item } = Menu;
const listData = [
  {
    name: "绿色",
    id: 1
  },
  {
    name: "没有意外",
    id: 2
  }
];

@observer
export default class BankPage extends Component {
  componentDidMount() {
    console.log(this.props);
    const { hstore } = this.props;
    hstore.getCategries();
  }

  handleSelectCategory({ item, key, selectedKeys }) {
    const { hstore } = this.props;
    hstore.getRankList({ category: key });
    // console.log(item, key, selectedKeys);
  }

  renderListItem(item) {
    return <List.Item key={item.id}>{item.name}</List.Item>;
  }
  
  render() {
    const { categories, rankList } = this.props.hstore;
    let rList = toJS(rankList);
    return (
      <Layout className="bank">
        <div className="wrapper">
          <Sider width={200} className="bank-menu">
            <h2>排行榜</h2>
            <Menu
              mode="inline"
              inlineCollapsed={false}
              className="menu"
              onSelect={this.handleSelectCategory.bind(this)}
            >
              {categories.map(m => {
                return <Item key={m.type}>{m.name}</Item>;
              })}
            </Menu>
          </Sider>
          <Content className="bank-list">
            <h2>欧美</h2>
            <List
              size="large"
              className="song-list"
              dataSource={rList}
              renderItem={item => this.renderListItem(item)}
              pagination={{
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
