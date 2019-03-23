import React, { Component } from 'react'
import moment from 'moment';
import { List, Avatar } from 'antd';
import { toJS } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';

@observer
export class MySongListTable extends Component {
    render() {
        const data = [
            {
                title: '不可以',
                description: 'kkakkk',
                count: '35首',
                creater: '艾菲'
            },
            {
                title: '不哭',
                count: '34首',
                description: 'kkakkk',
                creater: '艾菲jjk'
            },
            {
                title: '可能否',
                count: '23首',
                description: 'kkakkk',
                creater: '艾菲考虑了'
            },
            {
                title: '滴答',
                count: '10首',
                description: 'kkakkk',
                creater: '艾菲会考虑是否'
            },
        ];
        console.log(data);
        console.log(this.props, ">>>>>>>>")
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.title}</a>}
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
