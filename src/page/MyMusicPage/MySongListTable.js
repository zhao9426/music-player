import React, { Component } from 'react'
import { List } from 'antd';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';

@observer
export class MySongListTable extends Component {
    render() {
        const { list } = this.props;
        return (
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.author}
                        />
                    </List.Item>
                )}
            /> 
        );
    }

}
export default MySongListTable
