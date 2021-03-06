import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router";
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

  RenderManage(props){
    const { history } = this.props;
    if(hstore && hstore.loginUser.role == 0){
      return <ManagePage mstore={mstore} hstore={hstore} {...props} />
    } else {
      return  <Redirect
      to={{
        pathname: "/",
        state: { from: props.location }
      }}
    />
    }
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
             path="/singer/:id?"//路经参数
              render={props => <SingerPage {...props}  hstore={hstore}/>}
          />
            <Route
              path="/my"
              render={props => <MyMusicPage mystore={mystore} mstore={mstore} hstore={hstore} mystore={mystore} {...props} />}
            />
            <Route
              exact
              path="/song/list/:id?"
              render={props => <SongListPage slstore={slstore} hstore={hstore} {...props} />}
            />
            <Route exact path="/song/play/:id?" 
              render={ props => <Player {...props} hstore={hstore}/>} />
            <Route
              path="/manage"
              render={this.RenderManage.bind(this)}
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
