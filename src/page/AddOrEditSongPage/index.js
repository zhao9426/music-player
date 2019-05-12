import React, { Component } from "react";
import { Form, Input, Button, message, Select } from "antd";
import { toJS } from "mobx";
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";
import "./addOrEditUserPage.less";

const { Item } = Form;
const { TextArea } = Input;
const Option = Select.Option;
@observer
class AddOrEditSongPage extends Component {
  state = {
    option: "add",
    type: "text"
  };
  handleSubmit(e) {
    const { mstore,  history, location } = this.props;
    const { option } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if ("add" === option) {
          mstore.createSong(values, res => {
            if (res.success) {
              message.info("歌曲创建成功！");
              setTimeout(() => {
                history.push(`/manage`, { to: "songs" });
              }, 1000);
            }
          });
        } else if ("edit" === option) {
          let song = location.state;
          mstore.updateSong(song.id, values, res => {
            if (res.success) {
              message.success("歌曲信息修改成功！",1);
              setTimeout(() => {
                history.push(`/manage`,{to: "songs"});
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
    const { match, location, form, hstore } = this.props;
    hstore.getCategries();
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
            singer: song.singer,
            album: song.album,
            url: song.url,
            poster: song.poster,
            category: song.category,
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
            name: '',
            singer: '',
            album: '',
            url: '',
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
    const { hstore } = this.props;
    let  { categories } = hstore;
    let  c = toJS(categories);
    return (
      <Form
        className="wrapper-add-user"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Item label="歌名" {...itemLayout}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请输入歌名"
              }
            ]
          })(<Input placeholder="歌名" autoComplete="off" />)}
        </Item>
        <Item label="歌手" {...itemLayout}>
          {getFieldDecorator("singer", {
            rules: [
              {
                required: true,
                message: "请输入歌手"
              }
            ]
          })(<Input type={type} placeholder="歌手" />)}
        </Item>
        <Item label="专辑" {...itemLayout}>
          {getFieldDecorator("album", {
            rules: [
              {
                required: false,
                message: "请输入专辑"
              }
            ]
          })(<Input type={type} placeholder="专辑" />)}
        </Item>
        <Item label="歌曲文件地址" {...itemLayout}>
          {getFieldDecorator("url", {
            rules: [
              {
                required: true,
                message: "请输入歌曲文件地址"
              }
            ]
          })(<TextArea  rows={ 3 } placeholder="歌曲文件地址" />)}
        </Item>
        <Item label="歌曲图片地址" {...itemLayout}>
          {getFieldDecorator("poster", {
            rules: [
              {
                required: true,
                message: "请输入歌曲图片地址"
              }
            ]
          })(<TextArea  placeholder="歌曲图片地址" />)}
        </Item>
        <Item label="歌曲类别" {...itemLayout}>
          {getFieldDecorator("category", {
            rules: [
              {
                required: true,
                message: "请选择歌曲类别"
              }
            ]
          })(
            <Select>
              {
                c && c.map(item =>  <Option key={item.type} value={String(item.type)}>{item.name}</Option> )
              }
            </Select>
        )}
        </Item>
        <Item label="描述" {...itemLayout}>
          {getFieldDecorator("description", {
            rules: [
              {
                required: false,
                message: "请输入描述"
              }
            ]
          })(<TextArea rows={6} placeholder="描述" />)}
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
