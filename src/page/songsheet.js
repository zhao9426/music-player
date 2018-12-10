import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import TopCarousel from "../components/TopCarousel";
import "./songsheet.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class SongSheet extends Component {
    render(){
        return (
            <Layout className="songsheet-page">
                <Header theme="light" className="songsheet-header">
                    <div className="head-left"><LeftHead /></div>
                    <div className="head-right"><RightHead /></div>
                </Header>
                <Content className="songsheet-content">
                    <Layout hasSider>
                        <Content>
                        <Row>
                        <Col span={6}>
                        </Col>
                        <Col span={18}>
                        </Col>
                        </Row>
                        </Content>
                    </Layout>
                </Content>
                <Footer/>
            </Layout>
        )
    }
}