import React, { Component } from "react";
import { Layout } from 'antd';
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
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
                        <Content>Content</Content>
                        <Sider theme="light">Sider</Sider>
                    </Layout>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}