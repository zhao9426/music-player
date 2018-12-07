import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import App from "./App";
import MusicList from "../page/musiclist";

export default class Root extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { history } = this.props
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={App}/>
                    <Route path="/list" component={MusicList}/>
                </Switch>
            </Router>
        );
    }
}