import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import Home from "../page/home";
import SongSheet from "../page/songsheet";
import Play from "../page/play";
import PlayList from "../page/PlayList";
import Login from "../page/Login";
import Register from "../page/Register";

export default class Root extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { history } = this.props
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/song/list" component={SongSheet} />
                    <Route exact path="/play" component={Play} />
                    <Route exact path="/playlist" component={PlayList} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
        );
    }
}