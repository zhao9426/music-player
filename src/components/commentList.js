import React, { Component } from "react";
import { List, Comment } from "antd";
export default class CommentList extends Component {
    constructor(props){
    }

    render(){
        const { comments } = this.props
        return (
            <List
                dataSource={comments}
                header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
                itemLayout="horizontal"
                renderItem={props => <Comment {...props} />}
            />
        )
    }
}