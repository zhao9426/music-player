import React, { Component } from 'react'
import moment from 'moment';
import { Input, Button, Table } from 'antd';
import { toJS } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types'
const {Search} = Input;

@observer
export class ManageSongListTable extends Component {
  static propTypes = {};

  delete(sl) {
    this.props.delete(sl);
  }

  update(sl) {
    this.props.update(sl);
  }

  render() {
    const { list } = this.props;
    const column = [
      {
        title: "ID",
        width: "4em",
        dataIndex: "id"
      },
      {
        title: "歌名",
        dataIndex: "name",
        width: "6em"
      },
      {
        title: "作者",
        dataIndex: "author",
        width: "5em"
      },
      {
        title: "封面图",
        dataIndex: "poster",
        width: "12em"
      },
      {
        title: "收藏数",
        dataIndex: "favorite",
        width: "6em"
      },
      {
        title: "播放次数",
        dataIndex: "count",
        width: "7em"
      },
      {
        title: "描述",
        dataIndex: "description",
        width: "5em"
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
        width: "14em",
        render: r => {
          return (
            <div className="btn-group">
              <Button
                type="primary"
                onClick={this.update.bind(this, r)}
                className="btn"
              >
                修改
              </Button>
              <Button
                type="danger"
                onClick={this.delete.bind(this, r)}
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
        columns={column}
        bordered
        rowKey="id"
        pagination={{ hideOnSinglePage: true }}
      />
    );
  }
}

export  default ManageSongListTable
