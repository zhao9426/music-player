import React,{Component} from 'react'
import './musiclistitem.less'
import Pubsub from 'pubsub-js'
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
        console.log(this.props, "kkk")
        return(
            <li onClick={this.playMusic.bind(this,musicItem)} className={`components-musiclistitem row${this.props.focus ? 'focus' :'' }`}>
                <p><strong>{musicItem.title}</strong>-{musicItem.artist}</p>
                <p onClick={this.deleteMusic.bind(this,musicItem)} className="-col-auto delete"></p>
            </li>
        );
    }
}
export default MusicListItem;