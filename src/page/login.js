import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { Row, Col } from 'antd';
import login from "./login.less";
  

const FormItem = Form.Item;
class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit  (e)  {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
              <div className="login">
                <div className="login-header" >登录</div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem
                label="账号">
                  {getFieldDecorator('账号', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem
                label="密码"
                >
                  {getFieldDecorator('密码', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  <div className="fen">
                  {getFieldDecorator('记住密码', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>下次自动登录</Checkbox>
                  )}
                  <a className="login-form-forgot" href="">忘记密码</a>
                  </div>
                  <div className="fenge">
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                 <a href="">立即注册!</a>
                 </div>
                </FormItem>
              </Form>
              </div>
            </Fragment>
        )
    }
}

const WrappedRegistrationForm = Form.create()(Login);

export default WrappedRegistrationForm;