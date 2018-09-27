import React,{Component} from 'react'
import './header.less'
class Header  extends Component{
    render(){
        return(
            <div className="components-header row">
                <div id="player"></div>
                <img src="../../static/images/logo.png" alt=""  className="img"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        );
    }
}
export default Header;