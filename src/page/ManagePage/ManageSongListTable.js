import React, { Component } from 'react'
import moment from 'moment';
import { Input, Button, Table } from 'antd';
import { observer } from "mobx-react";
import PropTypes from 'prop-types'
const {Search} = Input;

@observer
export class ManageSongListTable extends Component {
  static propTypes = {
  }

deleteUser(user){
    const { mstore } = this.props;
    mstore.deleteUser(user);  
 }

  render() {
      console.log(this.props);
      const {list} = this.props
          const column = [
            {
              title: "ID",
              width: "4em",
              dataIndex: "id"
            },
            {
              title: "歌名",
              dataIndex: "name"
            },
            {
              title: "作者",
              dataIndex: "author"
            },
            {
              title: "收藏数",
              dataIndex: "favorite"
            },
            {
              title: "播放次数",
              dataIndex: "count"
            },
            {
              title: "描述",
              dataIndex: "description"
            },
            {
              title: "创建时间",
              dataIndex: "created_at",
              render: (t, d) => (
                <span>{moment(t).format("YYYY-MM-DD hh:mm")}</span>
              )
            },
            {
              title: "更新时间",
              dataIndex: "updated_at",
              render: (t, d) => (
                <span>{moment(t).format("YYYY-MM-DD hh:mm")}</span>
              )
            },
            {
              title: "操作",
              align: "center",
              render: r => {
                return (
                  <div className="btn-group">
                    <Button type="primary" className="btn">
                      修改
                    </Button>
                    <Button
                      type="danger"
                      onClick={this.deleteUser.bind(this, r)}
                      className="btn"
                    >
                      删除
                    </Button>
                  </div>
                );
              }
            }
          ];
    return (
      <Table dataSource={list} 
            columns={column} 
            bordered 
            rowKey="id" 
            pagination={{ hideOnSinglePage: true}} />
    )
  }
}

export  default ManageSongListTable
