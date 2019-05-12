import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";

import "./addOrEditUserPage.less";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";

const { Item } = Form;

@observer
class AddOrEditUserPage extends Component {
  state = {
    option: "add",
    type: "text"
  };
  handleSubmit(e) {
    const { mstore, history, location } = this.props;
    const { option } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if ("add" === option) {
          mstore.createUser(values, res => {
            if (res.success) {
              message.info("用户创建成功！");
              setTimeout(() => {
                history.push(`/manage`);
              }, 1000);
            }
          });
        } else if ("edit" === option) {
          let user = location.state;
          mstore.updateUser(user.id, values, res => {
            if (res.success) {
              message.success("用户信息修改成功！",1);
              setTimeout(() => {
                history.push(`/manage`);
              }, 1000);
            }
          });
        } else {
          message.warn("oops! no option!");
        }
      }
    });
  }

  cancelOption() {
    const { history } = this.props;
    history.replace(`/manage`,{to: "users"});
  }

  changeType() {
    this.setState({
      type: "password"
    });
  }

  componentDidMount() {
    const { match, location, form } = this.props;
    let { option } = match.params;
    if (option && option === "edit") {
      let user = location.state;
      this.setState(
        {
          type: "password",
          option: option
        },
        () => {
          form.setFieldsValue({
            name: user.name,
            pwd: user.pwd
          });
        }
      );
    } else {
      this.setState(
        {
          option: "add"
        },
        () => {
          form.setFieldsValue({
            name: "",
            pwd: ""
          });
        }
      );
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { type } = this.state;
    const itemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    };
    return (
      <Form
        className="wrapper-add-user"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Item label="用户名" {...itemLayout}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请输入用户名"
              }
            ]
          })(<Input placeholder="用户名" autoComplete="off" />)}
        </Item>
        <Item label="密码" {...itemLayout}>
          {getFieldDecorator("pwd", {
            rules: [
              {
                required: true,
                len: 6,
                message: "请输入密码,密码长度至少6个字符！"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="密码"
              onClick={this.changeType.bind(this)}
            />
          )}
        </Item>
        <Item wrapperCol={{ span: 2, offset: 4 }}>
          <div className="opt-group">
            <Button type="primary" className="opt" htmlType="submit">
              确定
            </Button>
            <Button className="opt" onClick={this.cancelOption.bind(this)}>
              取消
            </Button>
          </div>
        </Item>
      </Form>
    );
  }
}

export default Form.create()(AddOrEditUserPage);
