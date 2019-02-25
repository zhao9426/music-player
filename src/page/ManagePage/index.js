import React, { Component } from 'react';
import { Tabs, Input, Button, Table } from 'antd';
import {
    Switch,
    Route
} from 'react-router';
import './ManagePage.less'
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react';
import ManageUserTable from './ManageUserTable';
import ManageSongListTable from './ManageSongListTable';
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
        const { mstore, history } = this.props;
        const { currentTab } = this.state
        mstore.getUserList();
        console.log(this.props.mstore.userList);
         history.push(`/manage/${currentTab}`)
    }

    changeTab(currentTab){
        const { mstore, history } = this.props;
        if(currentTab == 'users'){
            mstore.getUserList();
        } else {
            mstore.getSongList();
        }
       history.push(`/manage/${currentTab}`)

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
        const { match } = this.props;
        const { currentTab } = this.state
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
                    <Route path={`${match.url}/users`} render={(props) => <ManageUserTable list={userList} {...props}/>}/>
                    <Route path={`${match.url}/songs`} render={(props) => <ManageSongListTable list={songList} {...props}/>}/>
                </div> 
            </div>    
         );
    }
}
 
export default ManagePage;