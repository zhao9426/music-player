import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import { Layout } from "antd";
import LeftHead from "../components/LeftHead";
import RightHead from "../components/RightHead";
import Home from "../page/home";
import SongSheet from "../page/songsheet";
import Play from "../page/play";
import PlayList from "../page/playList";
import Register from "../page/login";
import Login from "../page/testPlayer";
import TestPlayer from "../page/testPlayer";

const {
    Header, Footer, Content
} = Layout;

export default class Root extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { history } = this.props
        return (
            <Router history={history}>
            <Layout className="home-page">
                <Header theme="light" className="home-header">
                    <div className="head-left"><LeftHead /></div>
                    <div className="head-right"><RightHead /></div>
                </Header>
                <Content className="home-content">
                    <Layout hasSider>        
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/song/list" component={SongSheet} />
                                <Route exact path="/play" component={Play} />
                                <Route exact path="/playlist" component={PlayList} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Register} />
                                <Route exact path="/testplay" component={TestPlayer} />
                            </Switch>  
                    </Layout>
                </Content>
                <Footer />
            </Layout>
        </Router>
        );
    }
}

