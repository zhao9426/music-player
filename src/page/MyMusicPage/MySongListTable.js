import React, { Component } from 'react'
import { List } from 'antd';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './styles.less';

@observer
export class MySongListTable extends Component {
    render() {
        const { list } = this.props;
        return (
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    < List.Item key={item.id}>
                        <div className="list-wrapper">
                           <div className="left-list">
                                {item.id + 1}
                                <span className="title-fenge">{item.name}</span>
                                <span className="title-fenge">{item.description}</span>
                            </div>
                            <span className="playcon">
                                <span>{item.author}</span>
                            </span>
                        </div>
                    </List.Item>
                )}
            /> 
        );
    }

}
export default MySongListTable
