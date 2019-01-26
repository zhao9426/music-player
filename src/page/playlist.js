import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../layout/LeftHead";
import RightHead from "../layout/RightHead";
import PlayListB from "../components/PlayListB";
import "./playlist.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class PlayList extends Component {
    render() {
        return (
                <Content className="playlist-content">
                    <Layout hasSider>
                        <Content>
                            <div className="gutter-example">
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={2}>
                                        <div className="gutter-box"></div>
                                    </Col>
                                    <Col className="gutter-row" span={20}>
                                        <div className="gutter-box">
                                           <PlayListB/>
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
        )
    }
}