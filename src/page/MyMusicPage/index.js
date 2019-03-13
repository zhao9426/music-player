import React, { Component } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import './styles.less';

const TABS = [{name: "我的歌单", key: 1},
  {name: "我收藏的歌单", key: 2},
  { name: "我喜欢的歌曲", key: 3},
  { name: "我关注的歌手", key: 4}];

export default class MyMusicPage extends Component {
  render() {
    return (
      <div className="my-music">
        <div className="card-container">
          <Tabs type="card">
            {TABS.map(t => {
              return <TabPane tab={<span className="my-menus">{t.name}</span>} key={t.key} />;
            })}
          </Tabs>
        </div>
      </div>
    );
  }
}
