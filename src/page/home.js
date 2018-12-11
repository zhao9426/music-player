import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import TopCarousel from "../components/TopCarousel";
import SongList from "../components/SongList";
import InSinger from "../components/InSinger";
import NewSong from "../components/NewSong";
import HotSinger from "../components/HotSinger";
import "./home.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class Home extends Component {
    render() {
        return (
            <Content>
                <TopCarousel />
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={2}>
                            <div className="gutter-box"></div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <div className="gutter-box">
                                <SongList />
                                <NewSong />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <InSinger />
                                <HotSinger />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={2}>
                            <div className="gutter-box"></div>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}