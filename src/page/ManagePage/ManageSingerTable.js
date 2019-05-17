import React, { Component } from 'react'
import { Button, Table } from 'antd';
import { observer } from "mobx-react";
import moment from "moment";

@observer
export class ManageSingerTable extends Component {
  static propTypes = {};

  deleteSinger(singer) {
    this.props.delete(singer);
  }

  editSinger(singer){
    this.props.update(singer)
  }

  render() {
    const { list } = this.props;
    const colum = [
      {
        title: "ID",
        dataIndex: "id",
        width: "4em"
      },
      {
        title: "名称",
        dataIndex: "name",
        width: "8em"
      },
      {
        title: "歌手头像",
        dataIndex: "avatarUrl"
      },
      {
        title: "粉丝数",
        dataIndex: "follower",
        width: "6em"
      },
      {
        title: "创建时间",
        width: "7em",
        dataIndex: "created_at",
        render: (t, d) => <span>{moment(t).format("YYYY-MM-DD hh:mm")}</span>
      },
      {
        title: "更新时间",
        width: "7em",
        dataIndex: "updated_at",
        render: (t, d) => <span>{moment(t).format("YYYY-MM-DD hh:mm")}</span>
      },
      {
        title: "操作",
        align: "center",
        width: "14em",
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
