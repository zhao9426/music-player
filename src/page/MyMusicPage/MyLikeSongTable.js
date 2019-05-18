import React, { Component } from 'react'
import { List, Icon } from 'antd';
import { observer } from "mobx-react";
import { toJS } from 'mobx';
import Player from '../../components/Player'

@observer
export class MyLikeSongListTable extends Component {

    playList(){
        console.log("kkkk");
        
        this.refs.PLAYER.play();
    }

    render() {
        const { list } = this.props
        /* const { songs } = list;
        let s = toJS(songs); */
        return (
            <div>
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="#">{item.name}</a>}
                            description={item.singer}
                        />
                        <Icon type="caret-right" onClick={this.playList.bind(this)} className="icon-fenge" />
                    </List.Item>
                )}
            /> 
            <Player list={list.songs || []} ref="PLAYER"/>
            </div>
        );
    }

}
export default MyLikeSongListTable
