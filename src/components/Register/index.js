import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
} from "antd";
import { observer } from "mobx-react";
import "./style.less";

const FormItem = Form.Item;

@observer
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
    this.validateToNextPassword = this.validateToNextPassword.bind(this);
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.createUser(values); 
        console.log(values);
      }
    });
  }

  handleConfirmBlur(e) {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("两次输入的密码不一致!");
    } else {
      callback();
    }
  }

  validateToNextPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6, offset: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6, offset: 4 }
      }
    };

    return (
      <div className="register">
        <Form className="register-body" onSubmit={this.handleSubmit.bind(this)}>
          <FormItem {...formItemLayout} label="用户名">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "请填写用户名!"
                }
              ]
            })(<Input type="text" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="密码">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入密码!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </FormItem>
          <FormItem {...formItemLayout} label=" 确认密码 ">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "请输入密码!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input
                type="password"
                onBlur={this.handleConfirmBlur.bind(this)}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="用户头像">
            {getFieldDecorator("avatar", {
            })(<Input type="text" />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedRegisterForm = Form.create()(Register);
export default WrappedRegisterForm;
