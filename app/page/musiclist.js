import React,{Component} from 'react'
import MusicListItem from '../components/musiclistitem'

class MusicList extends Component{

    render(){
        let listEle=null;
        listEle=this.props.musicList.map((item)=>{
            return (
                <div>
                <MusicListItem
                  focus={item===this.props.currentMusicItem}
                         key={item.id}
                         musicItem={item}>
                         {item.title}
                </MusicListItem>
                </div>
            );
        })

        return(
            <ul>
                {listEle}
            </ul>
        );
    }

}

export default MusicList;