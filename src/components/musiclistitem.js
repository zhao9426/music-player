import React,{Component} from 'react'
import './musiclistitem.less'
import Pubsub from 'pubsub-js'
import { Row, Col } from 'antd';  

class MusicListItem extends Component{

    playMusic(musicItem){
        Pubsub.publish('PLAY_MUSIC',musicItem);
    }

    deleteMusic(musicItem,e){
        e.stopPropagation();
        Pubsub.publish('DELETE_MUSIC',musicItem);
    }

    render(){
        let musicItem=this.props.musicItem;

        return(
            <li onClick={this.playMusic.bind(this,musicItem)} className={`components-musiclistitem row${this.props.focus ? 'focus' :'' }`}>
            <Row className="Row">
            <Col span={1}>{musicItem.id}</Col>
            <Col span={6}>
            <p><strong>{musicItem.artist}</strong>-{musicItem.title}{musicItem.lyric}</p>
            </Col>
            <Col span={2}  offset={12}>
            <div>
                        <i className="fa fa-caret-square-o-right" style={{ color:'#ABABAB'}}></i>            
                        <i className="fa fa-download" style={{ color:'#ABABAB'}}></i>
                        <i className="fa fa-cart-arrow-down" style={{ color:'#ABABAB'}}></i>
                </div>
            </Col>
            <Col span={1}>
            <p>{musicItem.time}</p> 
            </Col>
            <Col span={1}>
            <p onClick={this.deleteMusic.bind(this,musicItem)} className="-col-auto delete"></p>
            </Col>
            <Col span={1}></Col>
          </Row>  
            </li>
        );
    }
    
}
export default MusicListItem;