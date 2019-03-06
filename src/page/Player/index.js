import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MusicVisualizer from "../../components/MusicVisualizer";

export class Player extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <MusicVisualizer/>
      </div>
    )
  }
}

export default Player
