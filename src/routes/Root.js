import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import Home from "../page/home";
import SongSheet from "../page/songsheet";

export default class Root extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { history } = this.props
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/" component={SongSheet}/>
                </Switch>
            </Router>
        );
    }
}