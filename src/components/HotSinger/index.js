import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.less";
import { Menu, Icon } from 'antd';
import { List, Skeleton, Card } from 'antd';

export default class HotSinger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1,2,3,4,5],
            current: '1',
        }
    }

    render() {
        const MenuItemGroup = Menu.ItemGroup;
        const { list } = this.state;
        const { Meta } = Card;
        return (
            <Fragment>
                <div className="hot-singer-header" >
                    <h2><span className="sp">热门</span>歌手</h2>
                    <Link to="/">华语</Link>
                    <Link to="/">欧美</Link>
                    <Link to="/">日韩</Link>
                    <Link to="/"><h5 className="more">更多</h5></Link>
                </div>
                <div className="hot-singer-body">
                    {
                        list.map((l, index) => {
                            return (
                                <Card key={l}
                                    className={`${index < 2 ? 'bigs' : 'smalls'}`}
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