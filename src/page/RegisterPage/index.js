import React, { Component } from "react";
import { Layout, Row, Col } from 'antd';
import Register from "../../components/Register";

const {
    Header, Footer, Content, Sider
} = Layout;

export default class RegisterPage extends Component {
    render() {
        return (
          <Content className="register-content">
            <Layout hasSider>
              <Content>
                <Register/>
              </Content>
            </Layout>
          </Content>
        );
    }
}