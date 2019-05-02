import React, { Component } from "react";
import PropTypes from "prop-types";
import { Slider, Switch, Table, Icon } from "antd";
import MusicPlayer from "../../utils/MusicVisualizer";
import { random } from "../../utils/random";
import "./style.less";

const urls = [
  {
    name: "不哭",
    id: 1,
    url:
      "http://pmusic.oss-cn-hangzhou.aliyuncs.com/music/%E4%B8%8D%E5%93%AD.mp3"
  },
  {
    name: "可能否",
    id: 2,
    url:
      "http://pmusic.oss-cn-hangzhou.aliyuncs.com/music/%E5%8F%AF%E8%83%BD%E5%90%A6-%E5%A4%8F%E7%A3%8A.mp3"
  }
];

export class MusicVisualizer extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      volum: 0,
      type: "dot",
      size: 128,
      height: 200,
      width: 100
    };
    this.Dots = [];
    this.CTX = null;
    this.CANVAS = null;
    this.MV = null;
    this.draw = this.draw.bind(this);
    this.resize = this.resize.bind(this);
  }

  handleChangeSlider(volum) {
    console.log(volum, "v");

    this.setState(
      {
        volum
      },
      () => {
        this.MV.changeVolume(this.state.volum);
      }
    );
  }

  handleSwitch(value) {
    this.setState({
      type: value ? "dot" : "column"
    });
  }

  handleSelect(item) {
    this.MV.play(item.url);
  }

  componentDidMount() {
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
    const { volum, type } = this.state;
    const columns = [{
      width: "2em",
      align: "center",
      render: (text, record, index) => {
        return <span>{index + 1}</span>
      }
    },
      {
      title: "歌名",
      width: "62%",
      render: (text, record, index) => {
        return <div><Icon type="play-circle" className="play" /> <span>{text}</span> </div>  
      },
      dataIndex: "name"
    },{
      title: "歌手",
      width: "36%",
      dataIndex: "singer"
    }];
    let data = urls;
    return (
      <div className="music-playload">
        <div className="player" ref="PLAYLOAD">
          <canvas ref="MUSIC_PLAYER" />
        </div>
        <div className="play-option">
          
          <div>
            <Switch
              checkedChildren="点"
              unCheckedChildren="柱"
              checked={type === "dot" ? true : false}
              onChange={this.handleSwitch.bind(this)}
              defaultChecked
            />
             <Slider
              min={0}
              max={1}
              step={0.01}
              onChange={this.handleChangeSlider.bind(this)}
              value={volum}
            />
          </div>
          <div className="play-list">
          <Table columns={columns} dataSource={data} />
          <ul>
            {urls.map(item => {
              return (
                <li key={item.id} onClick={this.handleSelect.bind(this, item)}>
                  {item.name}
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicVisualizer;
