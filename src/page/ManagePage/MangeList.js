import React, { Component } from 'react'
import { Tabs, Input, Button, Table } from 'antd';
import {
    Switch,
    Redirect,
    Route
} from 'react-router';
import './ManagePage.less'
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react';
import ManageUserTable from './ManageUserTable';
import ManageSongListTable from './ManageSongListTable';
import PropTypes from 'prop-types';
const { TabPane } = Tabs;
const { Search } = Input;

const manageTab = [
  { key: "users", label: "用户管理" },
  { key: "singer", label: "歌手管理" },
  { key: "songs", label: "歌曲管理" },
  { key: "songs-list", label: "歌单管理" },
  { key: "banner", label: "广告图管理" },
  { key: "tags", label: "标签管理" }
];

@observer
export class ManageList extends Component {
   static propTypes = {
    mstore: PropTypes.shape({
      userList: ObservablePropTypes.observableArrayOf(
        ObservablePropTypes.observableObject
      ).isRequired,
      getUserList: PropTypes.func
    }).isRequired
  };

  state = {
    currentTab: "users",
    userList: [],
    musicList: []
  };

  componentDidMount() {
    const { mstore, history } = this.props;
    const { currentTab } = this.state;
    mstore.getUserList();
    history.push(`/manage/${currentTab}`);
  }

  deleteUser(user) {
    const { mstore } = this.props;
    mstore.deleteUser(user);
  }

  changeTab(currentTab) {
    const { mstore, history } = this.props;
    if (currentTab == "users") {
      mstore.getUserList();
    } else {
      mstore.getSongList();
    }
    history.push(`/manage/${currentTab}`);

    this.setState({
      currentTab
    });
  }

  handleAdd(currentTab) {
    const { history } = this.props;
    console.log(currentTab, ">>>");
    history.push(`/manage/add/user`);
  }

  deleteUser(user) {
    const { mstore } = this.props;
    mstore.deleteUser(user);
  }

  render() {
    const { mstore } = this.props;
    const { userList, songList } = this.props.mstore;
    const { match } = this.props;
    const { currentTab } = this.state;
    
    return (
      <div>
        <Tabs
          defaultActiveKey={"users"}
          onChange={this.changeTab.bind(this)}
        >
          {manageTab.map(t => (
            <TabPane tab={t.label} key={t.key} />
          ))}
        </Tabs>
        <div className="header">
          <div className="search">
            <Search />
          </div>
          <div className="addBtn">
            <Button
              icon="plus"
              onClick={this.handleAdd.bind(this, currentTab)}
            />
          </div>
        </div>
        <div className="wrapper-table">
          <Route
            exact
            path={`${match.url}/users`}
            render={props => (
              <ManageUserTable
                deleteUser={this.deleteUser.bind(this)}
                list={userList}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/songs`}
            render={props => (
              <ManageSongListTable
                list={songList}
                deleteUser={this.deleteUser.bind(this)}
                {...props}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default ManageList
