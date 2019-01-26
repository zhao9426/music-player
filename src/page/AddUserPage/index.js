import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

import './addUserPage.less'
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react';
import PropTypes from 'prop-types';

const { Item } = Form

@observer
class AddUserPage extends Component {
    state = {  }
    handleSubmit(e){
        const { mstore, history } = this.props; 
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err){
                mstore.createUser(values, (user)=> {
                    history.push(`/manage`)
                } );  
            }
        })
    }

    render() { 
        const { getFieldDecorator } = this.props.form;
        const itemLayout = {
          labelCol: {
              span: 4
          },
          wrapperCol: {
              span: 8
          }  
        }
        return ( 
            <Form className="wrapper-add-user" 
                onSubmit={this.handleSubmit.bind(this)}>
               <Item label="用户名" {...itemLayout}>
                { getFieldDecorator("name", {
                    rulse: [{
                        required: true,
                        message: "请输入用户名"
                    }]
                })(
                    <Input  placeholder="用户名" />
                )}
                </Item> 
                <Item label="密码" {...itemLayout}>
                    {getFieldDecorator("pwd", {
                        rulse: [{
                            required: true,
                            message: "请输入密码"
                        }]
                    })(
                        <Input type="password" placeholder="密码" />
                    )}
                </Item>
                <Item wrapperCol={{span: 2, offset: 4}}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </Item> 
            </Form>
         );
    }
}
 
export default Form.create()(AddUserPage);