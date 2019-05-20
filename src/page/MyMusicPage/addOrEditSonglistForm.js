import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { observer } from "mobx-react";
import "./addOrEditSonglistForm.less";

const { Item } = Form;
const { TextArea } = Input;

@observer
class AddOrEditSongListForm extends Component {
  state = {
    option: "add",
    type: "text",
  };

  handleSubmit(e) {
    const { mstore, hstore, history, location, hideForm } = this.props;
    const { option } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
       let loginUser = hstore.loginUser; 
      if (!err) {
          if(!loginUser.id){
              message.warning("请登录！")
              return;
          } 
        values.uid = loginUser.id;
        values.author = loginUser.name;   
        console.log(values); 
        if ("add" === option) {
          mstore.createSongList(values, res => {
            if (res.success) {
              message.info("歌单创建成功！");
              hideForm(); 
              let query = { userId: loginUser.id, isSelfCreat: false }
              mystore.getMySongList(query); 
            //   setTimeout(() => {
            //     history.push(`/manage/song-list`, { to: "song-list" });
            //   }, 1000);
            }
          });
        } else if ("edit" === option) {
          let songlist = location.state;
          mstore.updateSongList(songlist.id, values, res => {
            if (res.success) {
              message.success("歌单信息修改成功！");
              hideForm();  
            //   setTimeout(() => {
            //     history.push(`/manage/song-list`, { to: "song-list" });
            //   }, 1000);
            }
          });
        } else {
          message.warn("oops! no option!");
        }
      }
    });
  }

  cancelOption() {
      const { hideForm } = this.props;
      console.log(this.props);
      
      hideForm();  
   // const { history } = this.props;
   // history.replace(`/manage/`, { to: "song-list" });
  }

  componentDidMount() {
    const { location, form } = this.props;
    let { option } = this.state;
    if (option && option === "edit") {
      let songlist = location.state;
      this.setState(
        {
          option: option
        },
        () => {
          form.setFieldsValue({
            name: songlist.name,
            author: songlist.author,
            poster: songlist.poster,
            description: songlist.description
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
        <Item label="歌单名" {...itemLayout}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请输入歌单名"
              }
            ]
          })(<Input placeholder="歌单名" autoComplete="off" />)}
        </Item>
        <Item label="歌单封面" {...itemLayout}>
          {getFieldDecorator("poster", {
            rules: [
              {
                required: true,
                message: "请输入歌单封面"
              }
            ]
          })(<TextArea rows = { 3 } placeholder="歌单封面" autoComplete="off" />)}
        </Item>
        {/* <Item label="歌单作者" {...itemLayout}>
          {getFieldDecorator("author", {
            rules: [
              {
                required: true,
                message: "请输入歌单作者"
              }
            ]
          })(<Input type={type} placeholder="歌单作者" autoComplete="off" />)}
        </Item> */}
        <Item label="简介" {...itemLayout}>
          {getFieldDecorator("description", {
            rules: [
              {
                required: false,
                message: "请输入简介"
              }
            ]
          })(<TextArea rows={ 6 } placeholder="简介" autoComplete="off" />)}
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

export default Form.create()(AddOrEditSongListForm);
