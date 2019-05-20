import React, { Component } from "react";
<<<<<<< Updated upstream
import { Tabs,Button, Modal } from "antd";
=======
import { Tabs } from "antd";
>>>>>>> Stashed changes
import { Switch, Route } from "react-router";
import { observer } from "mobx-react";
import MySongListTable from "./MySongListTable";
import MyLikeSingerTable from "./MyLikeSingerTable";
import MyLikeSongTable from "./MyLikeSongTable";
import AddOrEditSonglistForm from './addOrEditSonglistForm';
const { TabPane } = Tabs;

import "./styles.less";

const TABS = [
  // { name: "我的歌单", key: "song-list" },
  { name: "我收藏的歌单", key: "love-song-list" },
  { name: "我喜欢的歌曲", key: "love-song" },
  { name: "我关注的歌手", key: "love-singer" }
];

@observer
export default class MyMusicPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: {
        name: "我的歌单", key: "song-list"
      },
      visible: false
    }
  }

  delete(type, data) {
    const { mstore, history, match } = this.props;
    switch (type) {
      case "song-list":
        mstore.deleteSonglist(data);
        break;
      case "love-song-list":
        mstore.deleteLoveSongList(data);
        break;
      case "love-song":
        mstore.deleteLoveSong(data);
        break;
      case "love-singer":
        mstore.deleteLoveSinger(data);
        break;
      default:
    }
  }

  componentDidMount() {
    const { location } = this.props;
    let paths = location.pathname.match(/\/[\w|-]*/ig);
    let currentTab = paths[1] && paths[1].substring(1) || "love-song-list";
    let current = TABS.find(t => t.key == currentTab);
    this.setState({
      current
    }, () => {
      this.getData(currentTab);
    })
  }

  createSongList(){
    this.setState({
      visible: true
    })
  }

  hideForm(){
    this.setState({
        visible: false
    })
  }

  changeTab(currentTab) {
    const { history } = this.props;
    let current = TABS.find(t => t.key == currentTab);
    this.setState({
      current
    }, () => {
      this.getData(currentTab);
      history.push(`/my/${currentTab}`);
    });
  }

  handleSelectCategory({ key }) {
    const { hstore } = this.props;
    hstore.getRankList({ category: key });
    hstore.selectCategory(key);
  }

  handleSubmit(){
    console.log("submit");
  }

  getData(currentTab) {
    const {
      mystore,
      hstore
    } = this.props;
    let { loginUser } = hstore;
    let query = {};
    switch (currentTab) {
      case "song-list":
        query = { userId: loginUser.id, isSelfCreat: false }
        mystore.getMySongList(query);
        break;
      case "love-song-list":
        query = { userId: loginUser.id, isSelfCreat: false }
        mystore.getMyFavoriteSongList(query);
        break;
      case "love-song":
        query = { userId: loginUser.id }
        mystore.getMyFavoriteSongs(query);
        break;
      case "love-singer":
        query = { userId: loginUser.id }
        mystore.getMyFlowSingers(query);
        break;
      default:
        console.log("default"); 
    }
  }

  render() {
    const { myFlowSingers, myFavoriteSongs, mySongList, myFavoriteSongList } = this.props.mystore;
    const { match, mstore, hstore, mystore } = this.props;
    let { current, visible } = this.state;
    console.log(current);
    
    return (
      <div className="my-music">
        <div className="card-container">
          <Tabs
            type="card"
            tabPosition="left"
            className="tab-wrapper"
            activeKey={
              current.key
            }
            defaultActiveKey={"song-list"}
            onChange={this.changeTab.bind(this)}
          >
            {TABS.map(t => {
              return (
                <TabPane
                  tab={<span className="my-menus">{t.name}</span>}
                  key={t.key}
                />
              );
            })}
          </Tabs>
          <div className="wrapper-table">
          <div className="wrapTop">
            <h2 className="tab-title">{current && current.name}</h2>
            { current.key == "song-list" && <Button icon="plus"  className="addsonglist" onClick={this.createSongList.bind(this)}>新建歌单</Button>}
          </div>
          <div className="content-wrapper">
              <Switch>
                <Route
                  exact
                  path={`${match.url}/song-list`}
                  render={props => <MySongListTable list={mySongList} hstore delete={this.delete.bind(this, "song-list")}/>}
                />
                <Route
                  exact
                  path={`${match.url}/love-song-list`}
                  render={props => (
                    <MySongListTable list={myFavoriteSongList} />
                  )}
                />
                <Route
                  exact
                  path={`${match.url}/love-song`}
                  render={props => (
                    <MyLikeSongTable list={myFavoriteSongs} />
                  )}
                />
                <Route
                  exact
                  path={`${match.url}/love-singer`}
                  render={props => (
                    <MyLikeSingerTable list={myFlowSingers} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
        <Modal
              className="songlist-form"
              visible={visible}
              title="添加歌单"
              destroyOnClose
              footer={null}
              onOk={this.hideForm.bind(this)}
              onCancel={this.hideForm.bind(this)}
            >
              <AddOrEditSonglistForm 
              mstore={mstore}
              hstore={hstore}
              mystore={mystore}
              hideForm={this.hideForm.bind(this)}
              submit={this.handleSubmit.bind(this)} />
            </Modal>
      </div>
    );
  }
}
