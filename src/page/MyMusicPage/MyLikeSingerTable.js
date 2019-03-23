import React, { Component } from 'react'
import moment from 'moment';
import { List, Avatar } from 'antd';
import { toJS } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';

@observer
export class MyLikeSingerTable extends Component {
    render() {
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
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
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            /> 
        );
    }

}
export default MyLikeSingerTable
