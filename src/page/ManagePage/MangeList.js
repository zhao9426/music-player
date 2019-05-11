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
import ManageSingerTable from "./ManageSingerTable";
import PropTypes from 'prop-types';
const { TabPane } = Tabs;
const { Search } = Input;

const manageTab = [
  { key: "users", label: "用户管理" },
  { key: "singers", label: "歌手管理" },
  { key: "songs", label: "歌曲管理" },
  { key: "song-list", label: "歌单管理" },
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
    const { mstore, history, location, match } = this.props;
    const { currentTab } = this.state;
    let state = location.state;
    let to = state && state.to ? state.to : currentTab;
    switch (to) {
      case "users":
        mstore.getUserList();
        break;
      case "singers":
        console.log(to);
        mstore.getSingerList();
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
    this.setState(
      {
        currentTab: to
      },
      () => {
        history.push(`/manage/${to}`);
      }
    );
  }

  deleteUser(user) {
    const { mstore } = this.props;
    mstore.deleteUser(user);
  }

  changeTab(currentTab) {
    const { mstore, history } = this.props;
    switch (currentTab) {
      case "users":
        mstore.getUserList();
        break;
      case "singers":
        mstore.getSingerList();
        break;
      case "song-list":
        mstore.getSongListList();
        break;
      case "songs":
        mstore.getSongList();
        break;
      default:
    }
    history.push(`/manage/${currentTab}`);

    this.setState({
      currentTab
    });
  }

  search(type, value){
    const { mstore, history } = this.props;
    let query = { keyword : value }
    switch (type) {
      case "users":
        mstore.getUserList(query);
        break;
      case "singers":
        mstore.getSingerList(query);
        break;
      case "song-list":
        mstore.getSongListList(query);
        break;
      case "songs":
        mstore.getSongList(query);
        break;
      default:
    console.log(type, query, "search"); 
   }
  }

  handleAdd(currentTab) {
    const { history } = this.props;
    switch (currentTab) {
      case "users":
        history.push(`/manage/add/user`);
        break;
      case "singers":
        history.push(`/manage/add/singer`);
        break;
      case "song-list":
        history.push(`/manage/add/song-list`);
        break;
      case "songs":
        history.push(`/manage/add/song`);
      default:
    }
  }

  update(type, data) {
    const { mstore, history, match } = this.props;
    switch (type) {
      case "users":
        history.push(`${match.url}/edit/user`, toJS(data));
        break;
      case "singers":
        history.push(`${match.url}/edit/singer`, toJS(data));
        break;
      case "songs":
        history.push(`${match.url}/edit/song`, toJS(data));
        break;
      case "song-list":
        history.push(`${match.url}/edit/song-list`, toJS(data));
        break;
      default:
    }
  }

  delete(type, data) {
    const { mstore, history, match } = this.props;
    switch (type) {
      case "users":
        mstore.deleteUser(data);
        break;
      case "singers":
        mstore.deleteSinger(data);
        break;
      case "song-list":
        mstore.deleteSongList(data);
        break;
      case "songs":
        mstore.deleteSong(data);
        break;
      default:
    }
  }

  render() {
    const { mstore } = this.props;
    const { userList, songList, songListList, singerList } = this.props.mstore;
    const { match } = this.props;
    const { currentTab } = this.state;
    return (
      <div>
        <Tabs
          defaultActiveKey={"users"}
          activeKey={currentTab}
          onChange={this.changeTab.bind(this)}
        >
          {manageTab.map(t => (
            <TabPane tab={t.label} key={t.key} />
          ))}
        </Tabs>
        <div className="header">
          <div className="search">
            <Search onSearch={this.search.bind(this, currentTab)} />
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
                update={this.update.bind(this, "users")}
                delete={this.delete.bind(this, "users")}
                list={userList}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/singers`}
            render={props => (
              <ManageSingerTable
                list={singerList}
                update={this.update.bind(this, "singers")}
                delete={this.delete.bind(this, "singers")}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/songs`}
            render={props => (
              <ManageSongTable
                list={songList}
                update={this.update.bind(this, "songs")}
                delete={this.delete.bind(this, "songs")}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/song-list`}
            render={props => (
              <ManageSongListTable
                list={songListList}
                update={this.update.bind(this, "song-list")}
                delete={this.delete.bind(this, "song-list")}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default ManageList
