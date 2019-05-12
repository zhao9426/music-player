import React, { Component } from "react";
import PropTypes from "prop-types";
import { Slider, Switch, Table, Icon } from "antd";
import MusicPlayer from "../../utils/MusicVisualizer";
import { random } from "../../utils/random";
import "./style.less";
import { observer } from "mobx-react";
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_961670_e5nxqa6e56r.js"
});

@observer
export class MusicVisualizer extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      volume: 0.5,
      type: "dot",
      size: 128,
      height: 200,
      width: 100,
      isMute: false
    };
    this.Dots = [];
    this.CTX = null;
    this.CANVAS = null;
    this.MV = null;
    this.draw = this.draw.bind(this);
    this.resize = this.resize.bind(this);
  }

  handleChangeSlider(volume) {
    this.setState(
      {
        volume
      },
      () => {
        this.MV && this.MV.changeVolume(this.state.volume);
      }
    );
  }

  handleSwitch(value) {
    this.setState({
      type: value ? "dot" : "column"
    });
  }

  handlePlay(){
    const { currentSong } = this.props;
    this.setState({
      isPlay: !this.state.isPlay
    },() => {
      if(this.state.isPlay){
        this.MV && this.MV.play(currentSong.url);
      } else {
        this.MV && this.MV.stop();
      }
    })
  }

  handleMute(){
    let { isMute } = this.state;
   
    this.setState({
      isMute: !isMute
    }, ()=> {
      if (this.MV) {
        if (!isMute) {
          this.MV.changeVolume(0);
        } else {
          this.MV.changeVolume(this.state.volume || 0.5);
        }
      }
    });

  }

  handleSelect(item) {
    this.MV.play(item.url);
  }

  componentDidMount() {
    let { volume } = this.state;
    this.CANVAS = this.refs.MUSIC_PLAYER;
    this.CTX = this.refs.MUSIC_PLAYER.getContext("2d");
    let height = this.refs.PLAYLOAD.clientHeight;
    let width = this.refs.PLAYLOAD.clientWidth;
    this.setState(
      {
        height,
        width
      },
      () => {
        this.getDots();
        this.resize();
      }
    );
    this.MV = new MusicPlayer({
      size: 128,
      volume,
      visualizer: this.draw
    });
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    this.MV = null;
    window.removeEventListener("resize", this.resize);
  }

  resize() {
    let height = this.refs.PLAYLOAD.clientHeight;
    let width = this.refs.PLAYLOAD.clientWidth;
    console.log(height);
    
    this.setState({
      height,
      width
    });
    this.CANVAS.width = width;
    this.CANVAS.height = height;
    this.line = this.CTX.createLinearGradient(0, 0, 0, height);
    this.line.addColorStop(0, "red");
    this.line.addColorStop(0.5, "yellow");
    this.line.addColorStop(1, "green");
    this.getDots();
  }

  getDots() {
    const { size, height, width } = this.state;
    for (let i = 0; i < size; i++) {
      const x = random(0, width);
      const y = random(0, height);
      const color = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
        0,
        255
      )}, 0)`;
      this.Dots.push({
        x,
        y,
        dx: random(1, 4),
        color,
        cap: 0
      });
    }
  }

  draw(arr) {
    let { height, width, size, type } = this.state;
    this.CTX.clearRect(0, 0, width, height);
    const w = width / size;
    const cw = w * 0.6;
    const ch = cw > 10 ? 10 : cw;
    this.CTX.fillStyle = this.line;
    for (let i = 0; i < size; i++) {
      if (type == "column") {
        const o = this.Dots[i];
        const h = (arr[i] / 256) * height;
        this.CTX.fillRect(w * i, height - h, w * 0.6, h);
        this.CTX.fillRect(w * i, height - (o.cap + ch), cw, ch);
        o.cap--;
        if (o.cap < 0) {
          o.cap = 0;
        }
        if (h > 0 && o.cap < h + 40) {
          o.cap = h + 40 > height - ch ? height - ch : h + 40;
        }
      } else if (type == "dot") {
        this.CTX.beginPath();
        const o = this.Dots[i];
        const r =
          10 + ((arr[i] / 256) * (height > width ? width : height)) / 10;
        this.CTX.arc(o.x, o.y, r, 0, Math.PI * 2, true);
        const g = this.CTX.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
        g.addColorStop(0, "#fff");
        g.addColorStop(1, o.color);
        this.CTX.fillStyle = g;
        this.CTX.fill();
        o.x += o.dx;
        o.x = o.x > width ? 0 : o.x;
      }
    }
  }

  render() {
    const { volume, type, isPlay, isMute } = this.state;
    
    return (
      <div className="music-playload">
        <div className="mv-player" ref="PLAYLOAD">
          <canvas ref="MUSIC_PLAYER" />
        </div>
        <div className="play-bar">
          <div className="option-group-1">
            <Icon
              onClick={this.handlePlay.bind(this, isPlay)}
              className="icon"
              type={isPlay ? "pause" : "caret-right"}
            />
             <Icon className="icon" type="heart" />
            {/* <Icon className="icon" type="download" /> */}
            <Icon className="icon" type="message" />
          </div>
          <div className="option-group-2">
          <Switch
              checkedChildren="点状"
              unCheckedChildren="柱状"
              checked={type === "dot" ? true : false}
              onChange={this.handleSwitch.bind(this)}
              defaultChecked
            />
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
              onChange={this.handleChangeSlider.bind(this)}
              min={0}
              max={1}
              step={0.01}
            />
           
          </div>
        </div>
      </div>
    );
  }
}

export default MusicVisualizer;
