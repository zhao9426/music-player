import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router';
import { observer } from "mobx-react";
import MangeList from "./MangeList";
import AddOrEditUserPage from "../AddOrEditUserPage";
import AddOrEditSongListPage from "../AddOrEditSongListPage";
import AddOrEditSongPage from "../AddOrEditSongPage";
import AddOrEditSingerPage from "../AddOrEditSingerPage";


@observer
class ManagePage extends Component {
  render() {
    const { mstore, hstore, match } = this.props;
    return (
      <div className="wrapper">
        <Switch>
          <Route
            path={`${match.url}/:option/user`}
            render={props => (
              <AddOrEditUserPage mstore={mstore} {...props} />
            )}
          />
          <Route
            path={`${match.url}/:option/singer`}
            render={props => (
              <AddOrEditSingerPage mstore={mstore} {...props} />
            )}
          />
          <Route
            path={`${match.url}/:option/song-list`}
            render={props => (
              <AddOrEditSongListPage mstore={mstore} {...props} />
            )}
          />
          <Route
            path={`${match.url}/:option/song`}
            render={props => (
              <AddOrEditSongPage mstore={mstore} hstore={hstore} {...props} />
            )}
          />
          <Route
            path={`${match.url}`}
            render={props => <MangeList mstore={mstore} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default ManagePage;