import React, { Component } from "react";
import { Layout, Menu, List, Icon } from "antd";
import { toJS } from 'mobx'
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import "./styles.less";

const { Content, Sider } = Layout;
const { Item } = Menu;

@observer
export default class BankPage extends Component {
  componentDidMount() {
    const { hstore } = this.props;

    hstore.getCategries();
  }

  handleSelectCategory({ key }) {
    const { hstore } = this.props;
    hstore.getRankList({ category: key });
    hstore.selectCategory(key);
  }

  renderListItem(item) {
    return <List.Item key={item.id}>{item.name}</List.Item>;
  }
  
  render() {
    const { categories, rankList, currentCategory } = this.props.hstore;
    return (
      <Layout className="bank">
        <div className="wrapper">
          <Sider width={200} className="bank-menu">
            <h2>排行榜</h2>
            <Menu
              mode="inline"
              inlineCollapsed={false}
              className="menu"
              selectedKeys={[String(currentCategory.type)]}
              onSelect={this.handleSelectCategory.bind(this)}
            >
              {categories.map(m => {
                return <Item key={m.type}>{m.name}</Item>;
              })}
            </Menu>
          </Sider>
          <Content className="bank-list">
            <h2>{currentCategory && currentCategory.name}</h2>
            <List
              size="large"
              className="song-list"
              dataSource={rankList}
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
