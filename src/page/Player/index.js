import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MusicVisualizer from "../../components/MusicVisualizer";
import { observer } from 'mobx-react';

@observer
export class Player extends Component {
  static propTypes = {

  }

  componentDidMount() {
    const { match, hstore } = this.props;
    let songId = match.params.id;
    hstore.getSong(songId);
  }
  

  render() {
    let { currentSong } = this.props.hstore
    console.log(currentSong);
    
    return <MusicVisualizer currentSong={currentSong} />;
  }
}

export default Player
