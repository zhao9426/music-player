import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import HomePage from "../page/HomePage";
import BankPage from "../page/BankPage";
import MyMusicPage from "../page/MyMusicPage";
import ManagePage from "../page/ManagePage";
import RegisterPage from "../page/RegisterPage";
import Player from "../page/Player";
import Login from "../page/testPlayer";
import TestPlayer from "../page/testPlayer";
import Test from "../page/test";
import TodoList from "../page/TodoList";
import MPLayout from "../layout";
import mstore from "../store/mstore";
import hstore from "../store/hstore";
import store from "../store";
import mystore from "../store/mystore";
import store2 from "../store2";

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        < MPLayout {
          ...this.props
        }
        hstore = {
          hstore
        } >
          <Switch>
            <Route
              exact
              path="/"
              render={props => <HomePage {...props} hstore={hstore} />}
            />
            <Route
              exact
              path="/bank"
              render={props => <BankPage hstore={hstore} {...props} />}
            />
            <Route
              exact
              path="/register"
              render={props => <RegisterPage mstore={mstore} {...props} />}
            />
            <Route
              path="/my"
              render={props => <MyMusicPage mystore={mystore} {...props} />}
            />
            {/* <Route exact path="/song/list" component={SongSheet} /> */}
            <Route exact path="/player" component={Player} />
            {/* <Route exact path="/play" component={Play} /> */}
            {/* <Route exact path="/playlist" component={PlayList} /> */}
            <Route
              path="/manage"
              render={props => <ManagePage mstore={mstore} {...props} />}
            />
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
