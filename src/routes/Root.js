import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import Home from "../page/home";

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
                </Switch>
            </Router>
        );
    }
}