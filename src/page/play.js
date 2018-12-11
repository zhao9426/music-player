import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import PlaySong from "../components/PlaySong";
import "./play.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class Play extends Component {
    render() {
        return (
            <Layout className="play-page">
                <Header theme="light" className="play-header">
                    <div className="head-left"><LeftHead /></div>
                    <div className="head-right"><RightHead /></div>
                </Header>
                <Content className="play-content">
                    <Layout hasSider>
                        <Content>
                            <div className="gutter-example">
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={2}>
                                        <div className="gutter-box"></div>
                                    </Col>
                                    <Col className="gutter-row" span={20}>
                                        <div className="gutter-box">
                                            <PlaySong />
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={2}>
                                        <div className="gutter-box"></div>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Footer />
            </Layout>
        )
    }
}