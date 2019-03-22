import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";
import "./addOrEditUserPage.less";

const { Item } = Form;

@observer
class AddOrEditSongListPage extends Component {
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
          mstore.createSongList(values, res => {
            if (res.success) {
              message.info("歌单创建成功！");
              setTimeout(() => {
                history.push(`/manage/song-list`, { to: "song-list"});
              }, 1000);
            }
          });
        } else if ("edit" === option) {
          let song = location.state;
          mstore.updateSongList(song.id, values, res => {
            if (res.success) {
              message.success("歌单信息修改成功！",1);
              setTimeout(() => {
                history.push(`/manage/song-list`,{ to: "song-list"});
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
    history.replace(`/manage/`,{to: "song-list"});
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
      let song = location.state;
      this.setState(
        {
          type: "password",
          option: option
        },
        () => {
          // form.setFieldsValue({
          //   name: user.name,
          //   pwd: user.pwd
          // });
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
        span: 8
      }
    };
    return (
      <Form
        className="wrapper-add-user"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Item label="歌单名" {...itemLayout}>
          {getFieldDecorator("name", {
            rulse: [
              {
                required: true,
                message: "请输入歌单名"
              }
            ]
          })(<Input placeholder="歌单名" autoComplete="off" />)}
        </Item>
        <Item label="歌单封面" {...itemLayout}>
          {getFieldDecorator("poster", {
            rulse: [
              {
                required: true,
                message: "请输入歌单封面"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="歌单封面"
              autoComplete="off" 
            />
          )}
        </Item>
        <Item label="歌单作者" {...itemLayout}>
          {getFieldDecorator("author", {
            rulse: [
              {
                required: true,
                message: "请输入歌单作者"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="歌单作者"
              autoComplete="off" 
            />
          )}
        </Item>
        <Item label="简介" {...itemLayout}>
          {getFieldDecorator("description", {
            rulse: [
              {
                required: true,
                message: "请输入简介"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="简介"
              autoComplete="off" 
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

export default Form.create()(AddOrEditSongListPage);
