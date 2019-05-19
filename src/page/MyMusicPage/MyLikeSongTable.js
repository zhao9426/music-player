import React, { Component } from 'react'
import { List, Icon } from 'antd';
import { observer } from "mobx-react";
import { toJS } from 'mobx';
import Player from '../../components/Player';
import './styles.less';

@observer
export class MyLikeSongListTable extends Component {

    playList() {
        this.refs.PLAYER.play();
    }

    deleteLikeSong(c){
        const { mystore } = this.props;
        mystore.deleteLikeSong(c);
    }
    render() {
        const { list } = this.props
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={(item, index) => (
                        < List.Item key={item.id}>
                            <div className="list-wrapper">
                               <div className="left-list">
                                    {item.id + 1}<span className="title-fenge">{item.name}</span><span className="title-fenge">{item.singer}</span>
                                </div>
                                <span className="playcon">
                                    <Icon type="caret-right"  className="icon-fenge" onClick={this.playList.bind(this)}/>
                                    <span onClick={this.deleteLikeSong.bind(this,item, index)}>删除</span>
                                </span>
                            </div>
                        </List.Item>
                    )}
                />
                <Player list={list.songs || []} ref="PLAYER" />
            </div>
        );
    }

}
export default MyLikeSongListTable
