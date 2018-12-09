import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import TopCarousel from "../components/TopCarousel";
import SongList from "../components/SongList";
import HotSinger from "../components/HotSinger";
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
                            <div className="gutter-example">
                            <Row gutter={16}>
                            <Col className="gutter-row" span={2}>
                                <div className="gutter-box"></div>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <div className="gutter-box">
                                    <SongList/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                <HotSinger/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                                <div className="gutter-box"></div>
                            </Col>
                            </Row>
                            </div>


                            {/* <Row>
                                <Col span={4}>
                                </Col>
                                <Col span={12}>
                                    <SongList/>
                                    <div>新歌首发</div>
                                </Col>
                                <Col span={6}>
                                    <HotSinger/>
                                    <div>入住歌手</div>  
                                </Col>
                                <Col span={4}>
                                </Col>
                            </Row> */}
                        </Content>
                    </Layout>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}