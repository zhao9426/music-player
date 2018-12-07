import React,{Component} from 'react'
import MusicListItem from '../components/musiclistitem'

class MusicList extends Component{

    render(){
        return(
            <ul>
                {
                    this.props.musicList.map((item) => {
                    return (
                            <MusicListItem
                                focus={item === this.props.current}
                                key={item.id}
                                musicItem={item}>
                                {item.title}
                            </MusicListItem>
                    );
                })
                }
            </ul>
        );
    }
}

export default MusicList;