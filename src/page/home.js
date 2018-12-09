import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import TopCarousel from "../components/TopCarousel";
import "./home.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class Home extends Component {
    render(){
        return (
            <Layout className="home-page">
                <Header theme="light" className="home-header">
                    <div className="head-left"><LeftHead /></div>
                    <div className="head-right"><RightHead /></div>
                </Header>
                <Content className="home-content">
                    <Layout hasSider>
                        <Content>
                            <TopCarousel/>
                            <Row>
                                <Col>
                                    <div>精选歌单</div>
                                    <div>新歌首发</div>
                                </Col>
                                <Col>
                                    <div>热门歌手</div>
                                    <div>入住歌手</div>  
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}