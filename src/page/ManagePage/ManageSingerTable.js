import React, { Component } from 'react'
import { Input, Button, Table } from 'antd';
import { observer } from "mobx-react";
import moment from "moment";
import PropTypes from 'prop-types'
const {Search} = Input;

@observer
export class ManageSingerTable extends Component {
  static propTypes = {};

  deleteSinger(singer) {
    this.props.deleteSinger(singer);
  }

  editSinger(singer){
    this.props.update(singer)
  }

  render() {
    const { list } = this.props;
    const colum = [
      {
        title: "ID",
        dataIndex: "id"
      },
      {
        title: "名称",
        dataIndex: "name"
      },
      {
        title: "歌手头像",
        dataIndex: "avatarUrl"
      },
      {
        title: "粉丝数",
        dataIndex: "follower"
      },
      {
        title: "创建时间",
        dataIndex: "created_at",
        render: (t, d) => <span>{moment(t).format("YYYY-MM-DD hh:mm")}</span>
      },
      {
        title: "更新时间",
        dataIndex: "updated_at",
        render: (t, d) => <span>{moment(t).format("YYYY-MM-DD hh:mm")}</span>
      },
      {
        title: "操作",
        align: "center",
        render: r => {
          return (
            <div className="btn-group">
              <Button
                type="primary"
                onClick={this.editSinger.bind(this, r)}
                className="btn"
              >
                修改
              </Button>
              <Button
                type="danger"
                onClick={this.deleteSinger.bind(this, r)}
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
      <Table
        dataSource={list}
        columns={colum}
        bordered
        rowKey="id"
        pagination={{ hideOnSinglePage: true }}
      />
    );
  }
}

export  default ManageSingerTable
