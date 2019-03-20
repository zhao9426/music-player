import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";
import "./addOrEditUserPage.less";

const { Item } = Form;

@observer
class AddOrEditSongPage extends Component {
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
          mstore.createSong(values, res => {
            if (res.success) {
              message.info("歌曲创建成功！");
              setTimeout(() => {
                history.push(`/manage`);
              }, 1000);
            }
          });
        } else if ("edit" === option) {
          let user = location.state;
          mstore.updateSong(user.id, values, res => {
            if (res.success) {
              message.success("歌曲信息修改成功！",1);
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
    history.replace(`/manage`, {to: "songs"});
  }

  componentDidMount() {
    const { match, location, form } = this.props;
    let { option } = match.params;
    if (option && option === "edit") {
      let song = location.state;
      this.setState(
        {
          option: option
        },
        () => {
          form.setFieldsValue({
            name: song.name,
            author: song.author,
            favorite: song.favorite,
            count: song.count,
            description: song.description
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
        span: 8
      }
    };
    return (
      <Form
        className="wrapper-add-user"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Item label="歌名" {...itemLayout}>
          {getFieldDecorator("name", {
            rulse: [
              {
                required: true,
                message: "请输入歌名"
              }
            ]
          })(<Input placeholder="歌名" autoComplete="off" />)}
        </Item>
        <Item label="作者" {...itemLayout}>
          {getFieldDecorator("singer", {
            rulse: [
              {
                required: true,
                message: "请输入作者"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="作者"
            />
          )}
        </Item>
        <Item label="收藏数" {...itemLayout}>
          {getFieldDecorator("favorite", {
            rulse: [
              {
                required: true,
                message: "请输入收藏数"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="收藏数"
            />
          )}
        </Item>
        <Item label="播放数" {...itemLayout}>
          {getFieldDecorator("count", {
            rulse: [
              {
                required: true,
                message: "请输入播放数"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="播放数"
            />
          )}
        </Item>
        <Item label="描述" {...itemLayout}>
          {getFieldDecorator("description", {
            rulse: [
              {
                required: true,
                message: "请输入描述"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="描述"
            />
          )}
        </Item>
        <Item label="创建时间" {...itemLayout}>
          {getFieldDecorator("created_at", {
            rulse: [
              {
                required: true,
                message: "请输入创建"
              }
            ]
          })(
            <Input
              type={type}
              placeholder="创建时间"
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

export default Form.create()(AddOrEditSongPage);
