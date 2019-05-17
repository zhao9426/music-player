import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { observer } from "mobx-react";
import "./addOrEditUserPage.less";

const { Item } = Form;
const { TextArea } = Input;

@observer
class AddOrEditSingerPage extends Component {
  state = {
    option: "add",
    type: "text"
  };
  handleSubmit(e) {
    const { mstore, history, location } = this.props;//location跟浏览器对象的location一样
    const { option } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {//表单验证方法
      if (!err) {
        if ("add" === option) {
          mstore.createSinger(values, res => {
            if (res.success) {
              message.info("歌手创建成功！");
              setTimeout(() => {
                history.push(`/manage`, { to: "singers" });
              }, 1000);
            }
          });
        } else if ("edit" === option) {
          let singer = location.state;
          mstore.updateSinger(singer.id, values, res => {
            if (res.success) {
              message.success("歌手信息修改成功！",1);
              setTimeout(() => {
                history.push(`/manage`,{to: "singers"});
              }, 1000);
            }
          });
        } else {
          message.warn("oops! no option!");
        }
      }
    });
  }

  cancelOption() {//取消操作
    const { history } = this.props;
    history.replace(`/manage`, {to: "singers"});
  }

  componentDidMount() {
    const { match, location, form } = this.props;//match接受路由参数回匹配路由参数
    let { option } = match.params;
    if (option && option === "edit"){
      let singer = location.state;
      this.setState(
        {
          option: option
        },
        () => {
          form.setFieldsValue({
            name: singer.name,
            avatarUrl: singer.avatarUrl,
            album: singer.album,
            follower: singer.follower,
            description: singer.description
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
            name: '',
            avatarUrl: '',
            album: '',
            follower: '',
            description: ''
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
        <Item label="歌手" {...itemLayout}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请输入歌手"
              }
            ]
          })(<Input placeholder="歌手" autoComplete="off" />)}
        </Item>
        <Item label="歌手头像" {...itemLayout}>
          {getFieldDecorator("avatarUrl", {
            rules: [
              {
                required: true,
                message: "请输入歌手头像"
              }
            ]
          })(<TextArea placeholder="歌手头像"  rows={ 3 }/>)}
        </Item>
       {/*  <Item label="专辑" {...itemLayout}>
          {getFieldDecorator("album", {
            rulse: [
              {
                required: true,
                message: "请输入专辑"
              }
            ]
          })(<Input type={type} placeholder="专辑" />)}
        </Item> */}
        <Item label="描述" {...itemLayout}>
          {getFieldDecorator("description", {
            rules: [
              {
                required: false,
                message: "请输入描述"
              }
            ]
          })(<TextArea placeholder="描述" rows={6} />)}
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

export default Form.create()(AddOrEditSingerPage);
