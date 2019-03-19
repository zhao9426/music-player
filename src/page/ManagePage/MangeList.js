import React, { Component } from 'react'
import { Tabs, Input, Button, Table } from 'antd';
import {
    Switch,
    Redirect,
    Route
} from 'react-router';
import './ManagePage.less'
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react';
import { toJS } from 'mobx';
import ManageUserTable from './ManageUserTable';
import ManageSongListTable from './ManageSongListTable';
import ManageSongTable from "./ManageSongTable";
import PropTypes from 'prop-types';
const { TabPane } = Tabs;
const { Search } = Input;

const manageTab = [
  { key: "users", label: "用户管理" },
  // { key: "singer", label: "歌手管理" },
  { key: "songs", label: "歌曲管理" },
  { key: "song-list", label: "歌单管理" },
  // { key: "banner", label: "广告图管理" },
  // { key: "tags", label: "标签管理" }
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
    console.log(currentTab, ">>>");
    
    switch (currentTab) {
      case "users":
         mstore.getUserList();
         break;
      case "song-list":
        mstore.getSongListList();
        break;
      case "songs":
        mstore.getSongList();
        break;
      default:
        console.log("default");
    }
    history.push(`/manage/${currentTab}`);

    this.setState({
      currentTab
    });
  }

  handleAdd(currentTab) {
    const { history } = this.props;
    switch(currentTab){
      case "users": history.push(`/manage/add/user`);
      break;
      case "song-list": history.push(`/manage/add/song-list`);
      break;
      case "songs": history.push(`/manage/add/songs`);
    }
  }

  deleteUser(user) {
    const { mstore } = this.props;
    mstore.deleteUser(user);
  }

  editUser(user) {
    const { mstore, history, match } = this.props;
    history.push(`${match.url}/edit/user`, toJS(user));
  }

  deleteSongList(sl) {
    const { mstore } = this.props;
    mstore.deleteSongList(sl);
  }

  deleteSong(song) {
    const { mstore } = this.props;
    mstore.deleteSong(song);
  }

  render() {
    const { mstore } = this.props;
    const { userList, songList, songListList } = this.props.mstore;
    const { match } = this.props;
    const { currentTab } = this.state;
    console.log(this.props, ">>>>>")
    return (
      <div>
        <Tabs defaultActiveKey={"users"} onChange={this.changeTab.bind(this)}>
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
                editUser={this.editUser.bind(this)}
                deleteUser={this.deleteUser.bind(this)}
                list={userList}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/songs`}
            render={props => (
              <ManageSongTable
                list={songList}
                deleteSong={this.deleteSong.bind(this)}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/song-list`}
            render={props => (
              <ManageSongListTable
                list={songListList}
                deleteSongList={this.deleteSongList.bind(this)}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default ManageList
