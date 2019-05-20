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
    hstore.getRankList({ category: key, limit: 12 });
    hstore.selectCategory(key);
  }

  playSong(song){
    const { history } = this.props;
    history.push(`/song/play/${song.id}`)
  }

  renderListItem(item, index) {
    return <List.Item key={item.id}>
      <div className="list-wrapper">
        <div className="left-list">
          {index + 1}<span className="title-fenge">{item.name}</span><span className="title-fenge">{item.singer}</span>
        </div>
        <span className="playcon">
          <Icon type="caret-right" onClick={this.playSong.bind(this, item)} className="icon-fenge" />
         {/*  <Icon type="heart" className="icon-fenge" /> */}
        </span>
      </div>
    </List.Item>;
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
              renderItem={(item, index) => this.renderListItem(item, index)}
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
