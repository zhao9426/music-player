import React, { Component } from "react";
import "./player.less";
import { Icon, Slider } from "antd";
import { observer } from "mobx-react";
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_961670_e5nxqa6e56r.js"
});

@observer
export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      sources: [],
      isPlay: false,
      isMute: false,
      leftTime: "00:00",
      currentTime: 0,
      progress: 0,
      duration: "00:00",
      volume: 0.5
    };
    this.timer = null;
    this.play = this.play.bind(this)
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  handlePlay(isPlay) {
    if (isPlay) {
      this.pause();
    } else {
      this.play();
    }
    this.setState({
      isPlay: !isPlay
    });
  }

  play() {
    this.refs.AUDIO.play();
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({
      isPlay: true
    });
    this.timer = setInterval(() => {
      let leftTime = (this.refs.AUDIO && this.refs.AUDIO.currentTime) || 0;
      const duration = (this.refs.AUDIO && this.refs.AUDIO.duration) || 0;
      this.setState({
        leftTime: this.formatTime(leftTime),
        progress: duration>0? (leftTime / duration):0,
        duration: this.formatTime(duration)
      });
    }, 1000);
  }

  pause() {
    this.refs.AUDIO.pause();
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({
      isPlay: false
    });
  }
  // 格式化时间函数
  formatTime(time) {
    time = (time && parseInt(time)) || 0;
    let miniutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    miniutes = miniutes < 10 ? `0${miniutes}` : miniutes;
    return `${miniutes}:${seconds}`;
  }
  // 静音操作
  handleMute(isMute) {
    let { volume } = this.state;
    if (this.refs.AUDIO) {
      this.refs.AUDIO.isMute = isMute;
      if (isMute) {
        this.refs.AUDIO.volume = volume || 0.5;
      } else {
        this.refs.AUDIO.volume = 0;
      }
    }
    this.setState({
      isMute: !isMute
    });
  }

  handleChangeSlider(type, value) {
    console.log(type, value);
    if (this.refs.AUDIO) {
      let time = this.refs.AUDIO.duration;
      if ("progress" == type && time) {
        this.refs.AUDIO.currentTime = time * value;
      } else if ("volume" == type) {
        this.refs.AUDIO.volume = value;
      }
    }

    this.setState({
      [`${type}`]: value
    });
  }

  handleChangePlay(type) {
    let { list = [] } = this.props
    let { current } = this.state;
    this.pause();
    const OPTIONS = {
      prev: -1,
      next: 1
    };
    let index = current + OPTIONS[type] + list.length;
    current = index % list.length;
    console.log(current, "lll");
    
    this.setState(
      {
        current,
        progress: 0,
        currentTime: 0
      },
      () => {
        this.refs.AUDIO.load();
        this.play();
      }
    );
  }

  playToEnd() {
    this.timer && clearInterval(this.timer);
    this.setState({
      isPlay: false
    });
  }

  render() {
    let {
      current,
      leftTime,
      duration,
      progress,
      volume,
      isPlay,
      isMute
    } = this.state;
    let { list = [] } = this.props;

    return (
      <div className="player">
        <div className="tool-bar">
          <div className="option-group-1">
            <Icon
              onClick={this.handleChangePlay.bind(this, "prev")}
              className="icon"
              type="step-backward"
            />
            <Icon
              onClick={this.handlePlay.bind(this, isPlay)}
              className="icon"
              type={isPlay ? "pause" : "caret-right"}
            />
            <Icon
              onClick={this.handleChangePlay.bind(this, "next")}
              className="icon"
              type="step-forward"
            />
          </div>
          <div className="progress">
            <div className="progress-status">
                <div><span>{list && list[current] && list[current].name}</span></div>
                <div className="time"><span className="left-time">{leftTime}</span><span className="divider">/</span><span className="duration">{duration}</span></div>
            </div>
            <Slider
              defaultValue={0}
              tooltipVisible={false}
              value={progress}
              onChange={this.handleChangeSlider.bind(this, "progress")}
              min={0}
              max={1}
              step={0.01}
            />
          </div>
          <div className="option-group-2">
            <Icon className="icon" type="retweet" />
            <Icon className="icon" type="heart" />
            <Icon className="icon" type="message" />
          </div>
          <div className="option-group-3">
            <MyIcon
              className="icon"
              onClick={this.handleMute.bind(this, isMute)}
              type={isMute ? "icon-sound-muted" : "icon-sound-play"}
            />
            <Slider
              className="volumn-option"
              defaultValue={0}
              tooltipVisible={false}
              value={volume}
              onChange={this.handleChangeSlider.bind(this, "volume")}
              min={0}
              max={1}
              step={0.01}
            />
          </div>
        </div>
        <audio
          className="audio"
          onEnded={this.playToEnd.bind(this)}
          src={ list && list[current] && list[current].url}
          ref="AUDIO"
        />
      </div>
    );
  }
}
