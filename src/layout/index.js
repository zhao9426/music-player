import React, { Component } from "react";
import { Layout, Modal, message } from "antd";
import LeftHead from "./LeftHead";
import RightHead from "./RightHead";
import LoginForm from '../components/login';
import loginServce from '../services/loginServce'
import './layout.less';

const {
    Header, Footer, Content
} = Layout;


export default class MPLaylout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showLogin(){
        this.setState({
            visible: true
        })
    }

    hideLogin(){
        this.setState({
            visible: false
        })
    }

    login(params){
        const { history } = this.props
        loginServce({name: params.userName, pwd: params.password}).then(res => {
            if(res.login){
                this.setState({
                    ...res
                })
                history.push(`/manage`)
                this.hideLogin();
            } else {
                this.setState({
                    login: res.login
                },()=> {
                    message.error(res.message)
                })
            }
        }) 
    }

    render() {
        const { visible } = this.state
        return (
          <Layout className="main-layout">
            <Header theme="light" className="home-header">
              <LeftHead />
              <RightHead showLogin={this.showLogin.bind(this)} />
            </Header>
            <Content className="main-content">
              <Layout hasSider className="main">
                {this.props.children}
              </Layout>
            </Content>
            <Footer className="footer">
              <div>
                Panpan Music Player &copy; Created by ZhaoPanpan
              </div>
            </Footer>
            <Modal
              visible={visible}
              title="登陆"
              destroyOnClose
              footer={null}
              onOk={this.hideLogin.bind(this)}
              onCancel={this.hideLogin.bind(this)}
            >
              <LoginForm login={this.login.bind(this)} />
            </Modal>
          </Layout>
        );
    }
}