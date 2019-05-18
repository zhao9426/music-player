import React, { Component } from 'react';
import { List, Button, Icon, message } from 'antd';
import { toJS } from 'mobx';
import { observer } from "mobx-react";
import './style.less';
import Comment from '../../components/Comment';
import Player from '../../components/Player'
@observer
export default class SongListPage extends Component {

  componentDidMount() {
    const { slstore, match } = this.props;
    let id = match.params.id;
    slstore.getSongs(id);
  }

  jumpTo(type, data) {
    const { history } = this.props;
    console.log(data);
    
    switch (type) {
      case 'song':
        history.push(`/song/play/${data.id}`);
        break;
      case 'my':
        history.push(`/my/${data.id}`);
        break;
    }
  }

  playList(){
    this.refs.PLAYER.play();
  }

  favoriteSongList(){
    const { slstore, match, hstore } = this.props;
    let songListId = match.params.id;
    let userId = hstore.loginUser.id
    if(!userId){
      message.warning("请先登录后再收藏！");
      return;
    }
    hstore.favoriteSongList({ songListId, userId });
  }

  render() {
    const { slstore } = this.props;
    const { songs } = slstore;
    let s = toJS(songs);
    return (
      <div className="song-list">
      <div className="wrapper">
        <div className="title">当前位置>
            <a href="/">首页></a>
          <a>{s.name}</a>
        </div>
        <div className="songlist-wrapper">
          <div className="left">
            <img alt={s.name} src={s.poster} className="songlist-img" />
            <p>名称：<span className="content">{s.name}</span></p>
            <p>作者：<span className="content">{s.author}</span></p>
            <p>名称：<span className="content"></span></p>
            <p>简介：<span className="content">{s.description}</span></p>
          </div>
          <div className="right">
            <div className="sub-wrapper">
              <h3 className="right-title">歌曲列表</h3>
              <div className="opts">
               <Button type="primary" onClick={this.playList.bind(this)} icon="caret-right">播放</Button>
               <Button className="favorite" onClick={this.favoriteSongList.bind(this)} icon="plus">收藏</Button>
              </div>
            </div>
            <List
              itemLayout="horizontal"
              dataSource={s.songs}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a><span className="seri">{index + 1}</span><span className="seri">{item.name}</span>{item.singer}</a>}
                  />
                  <span className="playcon">
                    <Icon type="caret-right" className="icon-fenge"
                      onClick={this.jumpTo.bind(this, 'song', item)}
                    />
                    <Icon type="heart" className="icon-fenge"  onClick={this.favoriteSongList.bind(this)}/>
                  </span>
                </List.Item>
              )}
            />
          </div>
        </div>
        <Comment {...this.props} />
        </div>
        <Player list={s.songs || []} ref="PLAYER"/>
      </div>
    )
  }
}
