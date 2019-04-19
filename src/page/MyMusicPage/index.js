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
  { name: "我收藏的歌单", key: "song" },
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
    let currentTab = paths[1].substring(1);
    this.setState({
      currentTab
    },()=> {
       this.getData(currentTab);
    })
  }
  
  changeTab(currentTab) {
    const { history } = this.props;
    this.setState(
      {
        currentTab
      },
      () => {
         this.getData(currentTab);
        history.push(`/my/${currentTab}`);
      }
    );
  }

  getData(currentTab) {
     const {
       mystore,
     } = this.props;
     switch (currentTab) {
       case "song-list":
         mystore.getMySongList();
         break;
       case "song":
         mystore.getMyFavoriteSongList();
         break;
       case "love-song":
         mystore.getMyFavoriteSongs();
         break;
       case "love-singer":
         mystore.getMyFlowSingers();
         break;
       default:
         console.log("default");
     }
  }

  render() {
    const {
      myFlowSingers,
      myFavoriteSongs,
      mySongList,
      myFavoriteSongList
    } = this.props.mystore;
    const { match } = this.props;
    let { currentTab } = this.state
    return (
      <div className="my-music">
        <div className="card-container">
          <Tabs
            type="card"
            activeKey = {
              currentTab
            }
            defaultActiveKey = { "song-list" }
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
            <Switch>
              <Route
                exact
                path={`${match.url}/song-list`}
                render={props => <MySongListTable data={toJS(mySongList)} />}
              />
              <Route
                exact
                path={`${match.url}/song`}
                render={props => (
                  <MyLikeSingerTable data={toJS(myFlowSingers)} />
                )}
              />
              <Route
                exact
                path={`${match.url}/love-song`}
                render={props => (
                  <MyLikeSongTable data={toJS(myFavoriteSongs)} />
                )}
              />
              <Route
                exact
                path={`${match.url}/love-singer`}
                render={props => (
                  <MyFavoriteSongListTable data={toJS(myFavoriteSongList)} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
