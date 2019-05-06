import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import HomePage from "../page/HomePage";
import BankPage from "../page/BankPage";
import MyMusicPage from "../page/MyMusicPage";
import ManagePage from "../page/ManagePage";
import RegisterPage from "../page/RegisterPage";
import SongListPage from "../page/SongListPage";
import SingerPage from "../page/SingerPage";
import Player from "../page/Player";
import Test from "../page/test";
import MPLayout from "../layout";
import mstore from "../store/mstore";
import hstore from "../store/hstore";
import mystore from "../store/mystore";
import slstore from "../store/slstore";
export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <MPLayout {...this.props} hstore={hstore}>
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
             path="/singer/:id?"
              render={props => <SingerPage {...props}  hstore={hstore}/>}
          />
            <Route
              path="/my"
              render={props => <MyMusicPage mystore={mystore} {...props} />}
            />
            <Route
              exact/* 精确匹配 */
              path="/song/list/:id?"/* 如果有冒号开头说明是个路径参数如果后面跟上问号表示这个参数可选 */
              render={props => <SongListPage slstore={slstore} {...props} />}
            />
            <Route exact path="/player/:id?" component={Player} />
            <Route
              path="/manage"
              render={props => <ManagePage mstore={mstore} hstore={hstore} {...props} />}
            />
            <Route
              exact
              path="/test"
              render={() => (
                <Test/>
              )}
            />
          </Switch>
        </MPLayout>
      </Router>
    );
  }
}
