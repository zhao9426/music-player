import React, { Component, Fragment } from "react";
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import PropTypes from 'prop-types';
import "./login.less";

const FormItem = Form.Item;
class Login extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    login: PropTypes.func
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit.bind(this)} layout="vertical" className="login-form">
          <FormItem className="form-controll">
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem className="form-controll">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem className="form-controll">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-forgot" href="">忘记密码？</a>
          </FormItem>
          <FormItem className="form-controll">
            <Button type="primary" htmlType="submit" className="login-btn">
              登录
            </Button>
          </FormItem>
          <a href="/register">现在去注册!</a>
        </Form>
      </Fragment>
    )
  }
}


const WrappedLoginForm = Form.create()(Login);

export default WrappedLoginForm;