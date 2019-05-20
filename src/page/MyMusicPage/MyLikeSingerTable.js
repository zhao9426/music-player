import React, { Component } from 'react'
import { List, Icon } from 'antd';
import { observer } from "mobx-react";

@observer
export class MyLikeSingerTable extends Component {
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
                            description={item.description}
                        />
                        {/* <Icon type="close" className="icon-fenge" /> */} 
                    </List.Item>
                )}
            /> 
        );
    }

}
export default MyLikeSingerTable
