import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import Register from "../../components/Register";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
const { Header, Footer, Content, Sider } = Layout;

@observer
export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  createUser(value) {
    const {history} = this.props;
     this.props.mstore.createUser({name: value.username, pwd: value.password}, user => {
       history.push(`/`);
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
