import React, { Component } from 'react'
import moment from 'moment';
import { List, Avatar } from 'antd';
import { toJS } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';

@observer
export class MySongListTable extends Component {
    render() {
        const { list } = this.props
        return (
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{list.title}</a>}
                            description={item.description}
                        />
                        <div>{item.count}</div>
                        <div>{item.creater}</div>
                    </List.Item>
                )}
            /> 
        );
    }

}
export default MySongListTable
