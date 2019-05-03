import React, { Component } from 'react';
import { Row, Col, List, Avatar, Divider, Button, Icon } from 'antd';
import { toJS } from 'mobx';
import { observer } from "mobx-react";
import './songlistpage.less';
import Comment from '../../components/Comment';

@observer
export default class SongListPage extends Component {
  componentDidMount() {
    const { slstore } = this.props;
    slstore.getSongs(36);
  }
  render() {
    const { slstore } = this.props;
    const { songs } = slstore;
    let s = toJS(songs);
    console.log(s);
    return (
      <div className="wrapper">
        <div className="title">当前位置>
            <a>首页></a>
          <a>午后黄昏</a>
        </div>
        <div className="songlist-wrapper">
          <div className="left">
            <img alt={s.name} src={s.poster} className="songlist-img" />
            <p>名称：<span className="content">{s.name}</span></p>
            <p>作者：<span className="content">{s.author}</span></p>
            <p>名称：<span className="content"></span></p>
            <p>简介：<span className="content">{s.description}</span></p>
          </div>
          <div  className="right">
          <div className="sub-wrapper">
          <h3 className="right-title">歌曲列表</h3>
            <Button type="primary" icon="caret-right">播放</Button>
          </div>
            <List
             
              itemLayout="horizontal"
              dataSource={s.songs}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a><span className="seri">{index+1}</span><span className="seri">{item.name}</span>{item.singer}</a>}
                  />
                  <span className="playcon">
                  <Icon type="caret-right" className="icon-fenge"/>
                  <Icon type="heart" className="icon-fenge"/>
                  <Icon type="download" className="icon-fenge" />
                  </span>
                </List.Item>
              )}
            />
          </div>
        </div>
        <Comment />
      </div>
    )
  }
}
