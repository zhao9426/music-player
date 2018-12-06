import React, { Component } from 'react'
import Progress from '../Components/progress'
import './player.less';
import { Link } from 'react-router'
import Pubsub from 'pubsub-js'
import { Row, Col } from 'antd';
import {
    Comment, Avatar, Form, Button, List, Input,
  } from 'antd';
  import moment from 'moment';
  
  const TextArea = Input.TextArea;
  
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  
  const Editor = ({
    onChange, onSubmit, submitting, value,
  }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
  


let duration = null;
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            volume: 0,
            isPlay: true,
            leftTime: '',
            comments: [],
            submitting: false,
            value: '',
        }
    }
    handleSubmit  ()  {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });
    
        setTimeout(() => {
          this.setState({
            submitting: false,
            value: '',
            comments: [
              {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>{this.state.value}</p>,
                datetime: moment().fromNow(),
              },
              ...this.state.comments,
            ],
          });
        }, 1000);
      }
    
      handleChange  (e)  {
        this.setState({
          value: e.target.value,
        });
      }
    

    playPrev() {
        Pubsub.publish('PLAY_PREV');
    }

    playNext() {
        Pubsub.publish('PLAY_NEXT');
    }

    formatTime(time) {
        time = Math.floor(time);
        let miniutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${miniutes}:${seconds}`;
    }

    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                volume: e.jPlayer.options.volume * 100,
                progress: e.jPlayer.status.currentPercentAbsolute,
                leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
            });
        });
    }

    componentwillunMount() {
        $('#player').unbind($.jplayer.event.timupdate);
    }

    progressChangeHandler(progress) {
        $('#player').jPlayer('play', duration * progress)
    }

    changeVolumeHandler(progress) {
        $('#player').jPlayer('volume', progress)
    }

    play() {
        if (this.state.isPlay) {
            $('#player').jPlayer('pause');
        } else {
            $('#player').jPlayer('play');
        }
        this.setState({
            isPlay: !this.state.isPlay
        })
    }

    render() {
        const { comments, submitting, value } = this.state;
        return (
            <div className="player-page">

                <div className="under">
                    <div className="over">
                        <img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title} />
                    </div>

                    <div className="fenhang">
                        <h1 className="caption"><Link to="/list">我的私人播放列表&gt;</Link></h1>
                        <div className="controll-wrapper">
                            <h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                            <h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                            <h3 className="music-artist mt10">{this.props.currentMusicItem.lyric}</h3>
                            <h3 className="music-artist mt10">{this.props.currentMusicItem.album}</h3>
                            <div className="left-time -col-auto">-{this.state.leftTime}
                            </div>
                        </div>
                        <div className="effect" ref="eff">
                            
                        </div>
                    </div>
                </div>

                <div className="gound">

                    <div className="mt5 row" >
                        <i className="fa fa-chevron-circle-left fa-lg" onClick={this.playPrev} style={{ marginRight: 30 , color:'#fff' }}></i>
                        <i className={`fa fa-${this.state.isPlay ? 'pause-circle' : 'play-circle'}`} onClick={this.play.bind(this)} style={{marginLeft: 5,transform:'scale(2,2)',color:'#fff'}} ></i>
                        <i className="fa fa-chevron-circle-right fa-lg" onClick={this.playNext} style={{ marginLeft: 30 ,color:'#fff' }}></i>
                    </div>

                    <div className="progressbar" >
                        <Progress
                            progress={this.state.progress}
                            onProgressChange={
                                this.progressChangeHandler
                            }
                            barColor='#63B8FF'
                        >
                        </Progress>
                    </div>

                    <div className="volume-container">
                        <div className="volume-wrapper">
                            <Progress
                                progress={
                                    this.state.volume
                                }
                                onProgressChange={
                                    this.changeVolumeHandler
                                }
                                barColor="#aaa" style={{ marginTop :-30}}>
                            </Progress>
                        </div>
                        <i className="fa fa-volume-up" style={{ marginLeft: 20 ,color: '#fff' }}></i>
                    </div>

                    <i className="fa fa-download" style={{ marginLeft: 20, marginTop: -10 , color:'#fff'}}></i>
                   
                    <i className="fa fa-cart-arrow-down" style={{ marginLeft: 20, marginTop: -10 , color:'#fff'}}></i>
                  
                    <div className=" ">

                    </div>
                </div>

                <div>
                <Row>
                <Col span={4}></Col>
                <Col span={1}>
                <Avatar shape="square" size={64} icon="user" />
                </Col>
                <Col span={15}>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                avatar={(
                    <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                    />
                )}
                content={(
                    <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                    />
                )}
                />
                </Col>
                <Col span={4}></Col>
                </Row>
                </div>

            </div>
        );
    }
}

export default Player;