import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router';
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";
import MangeList from "./MangeList";
import AddOrEditUserPage from "../AddOrEditUserPage";
import AddOrEditSongListPage from "../AddOrEditSongListPage";
import AddOrEditSongPage from "../AddOrEditSongPage";



@observer
class ManagePage extends Component {
  render() {
    const { mstore, match, history, location } = this.props;    
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
            path={`${match.url}/:option/song-list`}
            render={props => (
              <AddOrEditSongListPage mstore={mstore} {...props} />
            )}
          />
          <Route
            path={`${match.url}/:option/songs`}
            render={props => (
              <AddOrEditSongPage mstore={mstore} {...props} />
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