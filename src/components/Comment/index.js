import React, { Component, Fragment } from "react";
import style from "./style.less";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import { observer } from "mobx-react";
import store from "store2";
import isPicture from "../../utils/isPicture";

const TextArea = Input.TextArea;
const CommentList = ({ comments, loginUser, replayComment, deleteComment, onCancel, handleReplyChange, handleReplySubmit, submittingReply, replyContent, replyIndex }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "最新评论" : ""}`}
    itemLayout="horizontal"
    renderItem={(c,index) => (
      <div className="comment-item">
        <Comment
          author={c.from_uname}
          avatar={
            isPicture(c.avatar)
              ? c.avatar
              : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
          datetime={moment(c.created_at).format("YYYY-MM-DD HH:mm:ss")}
          actions={loginUser.id == c.from_uid ? [
            <span onClick={deleteComment.bind(this,c, index)}>删除</span>,
            <span onClick={replayComment.bind(this,index)}>回复</span>
            ]:[
              <span onClick={replayComment.bind(this,index)}>回复</span>
              ] }
          {...c}
        />
        {replyIndex == index && <ReplyEditor 
          onChange={handleReplyChange}
          onSubmit={handleReplySubmit}
          submitting={submittingReply}
          onCancel={onCancel}
          value={replyContent}/>}
        
      </div>
    )}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item className="comment-group">
      <Button
        htmlType="submit"
        loading={submitting}
        className="comment-btn"
        onClick={onSubmit}
        type="primary"
      >
        发表评论
      </Button>
    </Form.Item>
  </div>
);

const ReplyEditor = ({ onChange, onSubmit, onCancel, submitting, value }) => (
  <div>
    <Form.Item className="reply-editor">
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item wrapperCol={{span: 4, offset: 20}} className="reply-option">
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
        className="reply-btn"
      >
        回复
      </Button>
      <Button
        onClick={onCancel}
      >
        取消
      </Button>
    </Form.Item>
  </div>
);

@observer
export default class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      submitting: false,
      submittingReply: false,
      content: "",
      replyContent: "",
      replyIndex: -1
    };
  }

  componentDidMount() {
    const { match, hstore, type } = this.props;
    let topicId = match.params.id;
    let topicType = type;
    hstore.getCommentList({ topicId, topicType });
  }

  handleReplySubmit() {
    if (!this.state.replyContent) {
      return;
    }

    this.setState({
      submittingReply: true
    });

    const { match, hstore, type } = this.props;
    let user = store.session.get("user");

    let topic_id = match.params.id;
    let from_uname = user.name;
    let from_uid = user.id;
    let comment = hstore.commentList.find((item,index) => this.state.replyIndex == index);

    let pData = {
      topic_id,
      topic_type: type,
      from_uname,
      from_uid,
      to_uid: comment.from_uid,
      to_uname: comment.from_uname,
      content: this.state.replyContent
    };

    hstore.createComment(pData, () => {
      this.setState({
        submittingReply: false,
        replyContent: "",
        replyIndex: -1
      });
    });
  }

  handleSubmit() {
    if (!this.state.content) {
      return;
    }

    this.setState({
      submitting: true
    });
    const { match, hstore, type } = this.props;
    let user = store.session.get("user");

    let topic_id = match.params.id;
    let from_uname = user.name;
    let from_uid = user.id;
    let pData = {
      topic_id,
      topic_type: type,
      from_uname,
      from_uid,
      content: this.state.content
    };

    hstore.createComment(pData, () => {
      this.setState({
        submitting: false,
        content: ""
      });
    });
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleReplyChange(e){
    this.setState({
      replyContent: e.target.value
    });
  }
  // 回复评论
  replayComment(index) {
    this.setState({
      replyIndex: index
    })
  }

  //取消评论
  cancelReplyComment(){
    this.setState({
      replyIndex: -1, 
      submittingReply: false,
      replyContent: ""
    })
  }

  deleteComment(c, index){
    const { hstore } = this.props;
    hstore.deleteComment(c);
  }
  render() {
    const { submitting, content, replyIndex, replyContent, submittingReply } = this.state;
    const { hstore } = this.props;
    let comments = hstore.commentList;
    let loginUser = hstore.loginUser;

    return (
      <div>
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange.bind(this)}
              onSubmit={this.handleSubmit.bind(this)}
              submitting={submitting}
              value={content}
            />
          }
        />
        {comments.length > 0 && (
          <CommentList
            comments={comments}
            loginUser={loginUser}
            replyIndex = {replyIndex}
            deleteComment= {this.deleteComment.bind(this)}
            replyContent = {replyContent}
            submittingReply = {submittingReply}
            handleReplySubmit={this.handleReplySubmit.bind(this)}
            handleReplyChange={this.handleReplyChange.bind(this)}
            onCancel={this.cancelReplyComment.bind(this)}
            replayComment={this.replayComment.bind(this)}
          />
        )}
      </div>
    );
  }
}
