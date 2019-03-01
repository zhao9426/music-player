import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import Home from "../page/home";
import ManagePage from '../page/ManagePage';
import AddUserPage from '../page/AddUserPage';
import SongSheet from "../page/songsheet";
import Play from "../page/play";
import PlayList from "../page/playList";
// import Register from "./login/login";
import store from "../store";
import store2 from "../store2";
import mstore from '../store/mstore'
import Login from "../page/testPlayer";
import TestPlayer from "../page/testPlayer";
import Test from "../page/test";
import TodoList from "../page/TodoList";

import MPLayout from '../layout'


export default class Root extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { history } = this.props
        return (
          <Router history={history}>
            <MPLayout {...this.props}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/song/list" component={SongSheet} />
                <Route exact path="/play" component={Play} />
                <Route exact path="/playlist" component={PlayList} />
                {/* <Route
                  exact
                  path="/manage/add/user"
                  render={props => (
                    <AddUserPage mstore={mstore} {...props} />
                  )}
                /> */}
                <Route
                  path="/manage"
                  render={props => (
                    <ManagePage mstore={mstore} {...props} />
                  )}
                />
                {/* <Route
                  exact
                  path="/manage/users"
                  render={props => (
                    <ManagePage mstore={mstore} {...props} />
                  )}
                /> */}
                <Route
                  exact
                  path="/test"
                  render={() => (
                    <Test cache={store.cache} refresh={store.refresh} />
                  )}
                />
                <Route
                  exact
                  path="/todo"
                  render={() => <TodoList store={store2} />}
                />
              </Switch>
            </MPLayout>
          </Router>
        );
    }
}