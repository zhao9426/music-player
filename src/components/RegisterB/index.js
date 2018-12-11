import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import style from "./style.less";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];


export  class RegisterB extends Component {
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
    
    handleWebsiteChange  (value)  {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24},
                sm: { span: 4, offset: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
            );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Fragment>
                <h1 className="register-header">手机注册</h1>
                <Form  className="register-body" onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="password" />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label=" 确认密码 "
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                                昵称&nbsp;
              <Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="电话号码"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="短信验证"
                    >
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                })(
                                    <Input />
                                    )}
                            </Col>
                            <Col span={12}>
                                <Button>获取验证码</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>我已经认真阅读并<a href="">同意</a></Checkbox>
                            )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>
                    </FormItem>
                </Form>
            </Fragment>
        )
    }
}

const WrappedRegistrationForm = Form.create()(RegisterB);

export default WrappedRegistrationForm;
