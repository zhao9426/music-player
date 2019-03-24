import React, { Component } from 'react';
import { Tabs } from 'antd';
import MySongListTable from './MySongListTable';
import MyLikeSingerTable from './MyLikeSingerTable';
import MyLikeSongTable from './MyLikeSongTable';
import MyFavoriteSongListTable from './MyFavoriteSongListTable';
const { TabPane } = Tabs;
import {
  Switch,
  Redirect,
  Route
} from 'react-router';
import './styles.less';

const TABS = [{ name: "我的歌单", key: 1 },
{ name: "我收藏的歌单", key: 2 },
{ name: "我喜欢的歌曲", key: 3 },
{ name: "我关注的歌手", key: 4 }];

export default class MyMusicPage extends Component {
  changeTab(currentTab) {
    const { mstore, history } = this.props;
    console.log(currentTab, ">>>");

    switch (currentTab) {
      case 1:
        mstore.getSongListList();
        break;
      case 2:
        mostore.getSongList();
        console.log(2);
        break;
      case 3:
        mostore.getSongList();
        console.log(3);
        break;
      case 4:
        mostore.getSongList();
        console.log(4);
        break;
      default:
        console.log("default");
    }

    history.push(`/my/${currentTab}`);

    this.setState({
      currentTab
    });
  }
  render() {
    const { songListList } = this.props.mstore;
    const { match } = this.props;
    console.log(this.props, ">>>>>>>>>>>>>>>>>")
    return (
      <div className="my-music">
        <div className="card-container">
          <Tabs type="card" defaultActiveKey={"1"} onChange={this.changeTab.bind(this)}>
            {TABS.map(t => {
              return <TabPane tab={<span className="my-menus">{t.name}</span>} key={t.key} />;
            })}
          </Tabs>
          <div className="wrapper-table">
            <Route
              exact
              path={`${match.url}/:id`}
              render={props => (
                <MySongListTable
                  data={songListList}
                />
              )}
            />
            <Route
              exact
              path={`${match.url}/:id`}
              render={props => (
                <MyLikeSingerTable
                  data={songListList}
                />
              )}
            />
            <Route
              exact
              path={`${match.url}/:id`}
              render={props => (
                <MyLikeSongTable
                  data={songListList}
                />
              )}
            />
            <Route
              exact
              path={`${match.url}/:id`}
              render={props => (
                <MyFavoriteSongListTable
                  data={songListList}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
