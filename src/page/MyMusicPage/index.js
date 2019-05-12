import React, { Component } from "react";
import { Tabs } from "antd";
import { Switch, Redirect, Route } from "react-router";
import { toJS } from "mobx";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import MySongListTable from "./MySongListTable";
import MyLikeSingerTable from "./MyLikeSingerTable";
import MyLikeSongTable from "./MyLikeSongTable";
import MyFavoriteSongListTable from "./MyFavoriteSongListTable";
const { TabPane } = Tabs;

import "./styles.less";

const TABS = [
  { name: "我的歌单", key: "song-list" },
  { name: "我收藏的歌单", key: "love-song-list" },
  { name: "我喜欢的歌曲", key: "love-song" },
  { name: "我关注的歌手", key: "love-singer" }
];

@observer
export default class MyMusicPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: "song-list"
    }
  }


  componentDidMount() {
    const { location } = this.props;
    let paths = location.pathname.match(/\/[\w|-]*/ig);
    let currentTab = paths[1] && paths[1].substring(1) || "song-list";
    this.setState({
      currentTab
    }, () => {
      this.getData(currentTab);
    })
  }

  changeTab(currentTab) {
    const { history } = this.props
    this.setState({
      currentTab
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
    const { match } = this.props;
    let { currentTab } = this.state;
    console.log(currentTab)
    return (
      <div className="my-music">
        <div className="card-container">
          <Tabs
            type="card"
            tabPosition="left"
            className="tab-wrapper"
            activeKey={
              currentTab
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
            <h2 className="tab-title">aa{currentTab && currentTab.name}</h2>
            <div className="content-wrapper">
              <Switch>
                <Route
                  exact
                  path={`${match.url}/song-list`}
                  render={props => <MySongListTable list={mySongList} />}
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
                    <MyFavoriteSongListTable list={myFlowSingers} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
