import React, {Component} from 'react';
import { observer } from 'mobx-react';
import "./singerpage.less";

@observer
export default class SingerPage extends Component {
    /* constructor() */
    componentDidMount() { 
        const { match, hstore} = this.props;
        let id = match.params.id;
        hstore.getSingerInfo(id);

    }
    render(){
        const { hstore } = this.props;
        const { singerInfo } = hstore;
        return (
            <div className="wrapper">
            <div className="title">当前位置>
                <a>首页></a>
              <a>午后黄昏</a>
            </div>
            <div className="singer-wrapper">
            <img src={singerInfo.avatarUrl} className="singer-img"/>
            <div className="content-wrapper">
            <strong className="singer-title">{singerInfo.name}</strong>
            <div className="singer-des">{singerInfo.description}</div>
            </div>
            </div>
          </div>
        );
    }
}
