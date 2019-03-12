import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import style from "./style.less";

const FormItem = Form.Item;


export  class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }

    handleSubmit  (e)  {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    
    handleConfirmBlur  (e)  {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    
    compareToFirstPassword  (rule, value, callback)  {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    
    validateToNextPassword  (rule, value, callback)  {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24},
                sm: { span: 6, offset: 2 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 10, offset: 4},
            },
        };

        return (
          <div className="register">
            <Form
              className="register-body"
              onSubmit={this.handleSubmit}
            >
              <FormItem {...formItemLayout} label="用户名">
                {getFieldDecorator("username", {
                  rules: [
                    {
                      type: "text",
                      message: "请填写用户名!"
                    },
                    {
                      required: true,
                      message: "请填写用户名!"
                    }
                  ]
                })(<Input />)}
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
                    onBlur={this.handleConfirmBlur}
                  />
                )}
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
