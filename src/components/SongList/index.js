import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.less";
import { Card } from 'antd';

export default class SongList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5]
        }
    }
    render(){
        const { list } = this.state;
        const { Meta } = Card;
        return (
            <Fragment>
                    <div className="song-list-header">
                        <h2><span className="sp">精选</span>歌单</h2>
                        <h5 className="more">更多</h5>
                    </div>
                    <div className="song-list-body">

                    { 
                        list.map( (l, index) => {
                            return (
                                <Card key={l} 
                               className={`${index==0 ? 'big' : 'small'}`}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                <Meta
                                 title="Europe Street beat"
                                 />
                                    {l}
                                </Card>
                            )
                        })
                     }
                     </div>
            </Fragment>
        )
    }
}