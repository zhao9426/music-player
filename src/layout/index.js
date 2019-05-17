import React, { Component } from "react";
import { Layout, Modal } from "antd";
import LeftHead from "./LeftHead";
import RightHead from "./RightHead";
import LoginForm from '../components/login';
import './layout.less';
const {
    Header, Content, Footer
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
        const { hstore } = this.props;
        let name = params.userName;
        let pwd = params.password
        hstore.login(name, pwd, (isLogin) => {
          if(isLogin){
             this.hideLogin();
          }
        });
    }

    logout(){
      const { hstore, history } = this.props;
      hstore.logout(()=> {
        history.push('/')
      });
    }

    render() {
        const { visible } = this.state
        return (
          <Layout className="main-layout">
            <Header theme="light" className="home-header">
              <LeftHead />
              <RightHead showLogin={this.showLogin.bind(this)} {...this.props} logout={this.logout.bind(this)} />
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
              title="登录"
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