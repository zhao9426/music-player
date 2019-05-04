import React, { Component } from "react";
import { Layout, Row, Col, message } from "antd";
import Register from "../../components/Register";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
const { Header, Footer, Content, Sider } = Layout;

@observer
export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  createUser(values) {
    const {history} = this.props;
    let { username: name, password: pwd, avatar } = values
    let pData = { name, pwd, avatar }
     this.props.mstore.createUser( pData, res => {
       if(res.success){
          history.push(`/`);
       } else {
         message.error(res.message)
       }
     });
  }
  render() {
    return (
      <Content className="register-content">
        <Layout hasSider>
          <Content>
            <Register {...this.props} createUser={this.createUser.bind(this)} />
          </Content>
        </Layout>
      </Content>
    );
  }
}
