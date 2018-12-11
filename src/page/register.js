import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import RegisterB from "../components/RegisterB";
import "./register.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class Register extends Component {
    render() {
        return (
                <Content className="register-content">
                    <Layout hasSider>
                        <Content>
                            <div className="gutter-example">
                                <Row gutter={16}>
                                    <Col className="gutter-row" span={2}>
                                        <div className="gutter-box"></div>
                                    </Col>
                                    <Col className="gutter-row" span={20}>
                                        <div className="gutter-box">
                                            <RegisterB />
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