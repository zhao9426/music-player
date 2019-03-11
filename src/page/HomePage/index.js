import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../../layout/LeftHead";
import RightHead from "../../layout/RightHead";
import TopCarousel from "../../components/TopCarousel";
import SongList from "../../components/SongList";
import InSinger from "../../components/InSinger";
import NewSong from "../../components/NewSong";
import HotSinger from "../../components/HotSinger";
import "./home.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class Home extends Component {
    render() {
        return (
          <Content>
            <TopCarousel />
            <div className="song-list">
              <h2>精选歌单</h2>
              <div className="list">
                <div className="list-item" />
              </div>
            </div>
            <div className="new-song">
              <h2>新歌首发</h2>
              <div className="list">
                <div className="list-item" />
              </div>
            </div>
            <div className="singer">
              <h2>入住歌手</h2>
              <div className="list">
                <div className="list-item" />
              </div>
            </div>
            {/* <div className="gutter-example">
              <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                  <div className="gutter-box" />
                </Col>
                <Col className="gutter-row" span={14}>
                  <div className="gutter-box">
                    <SongList />
                    <NewSong />
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div className="gutter-box">
                    <InSinger />
                    <HotSinger />
                  </div>
                </Col>
                <Col className="gutter-row" span={2}>
                  <div className="gutter-box" />
                </Col>
              </Row>
            </div> */}
          </Content>
        );
    }
}