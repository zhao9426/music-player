import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import LeftMessage from "../components/LeftMessage";
import RightMessage from "../components/RightMessage";
import TopCarousel from "../components/TopCarousel";
import "./songsheet.less";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class SongSheet extends Component {
    constructor(props){
        super(props);
        this.state={
            size: 'large',
        }
    }

    handleSizeChange  (e)  {
        this.setState({ size: e.target.value });
      }
    render(){
        const size = this.state.size;
        return (
            <Layout className="songsheet-page">
                <Header theme="light" className="songsheet-header">
                    <div className="head-left"><LeftHead /></div>
                    <div className="head-right"><RightHead /></div>
                </Header>
                <Content className="songsheet-content">
                    <Layout hasSider>
                        <Content>
                        <div className="gutter-example">
                            <Row gutter={16}>
                            <Col className="gutter-row" span={2}>
                                <div className="gutter-box"></div>
                            </Col>
                            {/* <div>我的位置>首页>精选集>会不会偶尔，你也想阅读我的心</div> */}
                            <Col className="gutter-row" span={4}>
                                <div className="box">
                                <LeftMessage/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={16}>
                                <div className="gutter-box">
                                <RightMessage/>
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
                <Footer/>
            </Layout>
        )
    }
}