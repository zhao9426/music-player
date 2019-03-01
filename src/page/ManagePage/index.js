import React, { Component } from 'react';
import {
    Switch,
    Route
} from 'react-router';
import { observer, PropTypes as ObservablePropTypes } from "mobx-react";
import PropTypes from "prop-types";
import MangeList from "./MangeList";
import AddUser from "../AddUserPage";


@observer
class ManagePage extends Component {
  render() {
    const { mstore, match } = this.props;    
    return (
      <div className="wrapper">
        <Switch>
          <Route
            path={`${match.url}/add/user`}
            render={props => <AddUser mstore={mstore} {...props} />}
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