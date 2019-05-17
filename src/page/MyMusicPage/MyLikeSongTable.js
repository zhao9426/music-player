import React, { Component } from 'react'
import { List } from 'antd';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';

@observer
export class MyLikeSongListTable extends Component {
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
                    </List.Item>
                )}
            /> 
        );
    }

}
export default MyLikeSongListTable
