import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import SingerHeader from "../components/SingerHeader";
import PopularWorks from "../components/PopularWorks";
import Album from "../components/Album";
import SingerIntroduction from "../components/SingerIntroduction";
import Comment1 from "../components/Comment";


import "./home.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class SingerMessage extends Component {
    render() {
        return (
            <Content>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={2}>
                            <div className="gutter-box"></div>
                        </Col>
                        <Col className="gutter-row" span={20}>
                            <div className="gutter-box">
                                <SingerHeader/>
                                <PopularWorks />
                                <Album/>
                                <SingerIntroduction/>
                                <Comment1/>
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