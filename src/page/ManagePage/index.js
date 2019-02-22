import React, { Component } from 'react';
import { Tabs, Input, Button, Table } from 'antd';
import './ManagePage.less'
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
const { TabPane } = Tabs;
const { Search } = Input;

const manageTab = [{key: "users", label: "用户管理"},{key: "songs", label: "歌曲管理"}];

@observer
class ManagePage extends Component {
    static propTypes = {
        mstore: PropTypes.shape({
            userList: ObservablePropTypes.observableArrayOf(
                ObservablePropTypes.observableObject
            ).isRequired,
            getUserList: PropTypes.func
        }).isRequired
    }
    
    state = { 
        currentTab: 'users', 
        userList: [],
        musicList: []
     }
    
    componentDidMount() {
        const { mstore } = this.props;
        mstore.getUserList();
        console.log(this.props.mstore.userList);
        
    }

    changeTab(currentTab){
        const { mstore } = this.props;
        if(currentTab == 'users'){
            mstore.getUserList();
        } else {
            mstore.getSongList();
        }
       
        this.setState({
            currentTab
        })
    } 

    handleAdd(currentTab){
        const { history } = this.props 
        history.push(`/manage/add/user`)
    }

    deleteUser(user){
        const { mstore } = this.props;
        mstore.deleteUser(user);  
    }

    render() { 
        const { userList, songList } = this.props.mstore;
        let list = [], colum = [];
        const columns = [
            {
                title: "ID",
                dataIndex: 'id'
            },
            {
                title: "名称",
                dataIndex: 'name'
            },
            {
                title: "密码",
                dataIndex: 'pwd'
            },
            {
                title: "创建时间",
                dataIndex: "created_at"
            },
            {
                title: "更新时间",
                dataIndex: "updated_at"
            },
            {
                title: "操作",
                align: "center",
                render: (r) => {
                    return (
                        <div className="btn-group">
                            <Button type="primary" className="btn">修改</Button> 
                            <Button type="danger" onClick={this.deleteUser.bind(this, r)}  className="btn">删除</Button>
                        </div> 
                    )
                }
            }
    ];

        const songListColumns = [
            {
                title: "ID",
                dataIndex: 'id'
            },
            {
                title: "歌名",
                dataIndex: 'name'
            },
            {
                title: "作者",
                dataIndex: 'author'
            },
            {
                title: "收藏数",
                dataIndex: "favorite"
            },
            {
                title: "播放次数",
                dataIndex: "count"
            },
            {
                title: "描述",
                dataIndex: "description"
            },
            {
                title: "创建时间",
                dataIndex: "created_at"
            },
            {
                title: "更新时间",
                dataIndex: "updated_at"
            },
            {
                title: "操作",
                align: "center",
                render: (r) => {
                    return (
                        <div className="btn-group">
                            <Button type="primary" className="btn">修改</Button>
                            <Button type="danger" onClick={this.deleteUser.bind(this, r)} className="btn">删除</Button>
                        </div>
                    )
                }
            }
        ];

    const { currentTab } = this.state
    if(currentTab == 'users'){
        list = userList;
        colum = columns
    } else {
        list = songList;
        colum = songListColumns
    }
        return ( 
            <div className='wrapper'>
                <Tabs defaultActiveKey={'users'} onChange={this.changeTab.bind(this)}>
                    {
                        manageTab.map(t => <TabPane tab={t.label} key={t.key}/>)
                    }
                </Tabs>
                <div className="header">
                    <div className="search">
                        <Search/>
                    </div>
                    <div className="addBtn">
                        <Button icon="plus" onClick={this.handleAdd.bind(this, currentTab)}/>
                    </div>
                </div>
                <div className="wrapper-table">
                    <Table dataSource={list} 
                        columns={colum} 
                        bordered 
                        rowKey="id" 
                        pagination={{ hideOnSinglePage: true}} />
                </div>
            </div>   
         );
    }
}
 
export default ManagePage;