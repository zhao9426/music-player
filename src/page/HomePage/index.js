import React, { Component } from "react";
import { Layout, Row, Col, Card, Carousel } from "antd";
import RightHead from "../../layout/RightHead";
import TopCarousel from "../../components/TopCarousel";
import "./home.less";

const {
    Header, Footer, Content, Sider
} = Layout;

const { Meta } = Card;
const SONGLIST = [
  {
    id: 1,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/a.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  },
  {
    id: 2,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/b.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  },
  {
    id: 3,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/c.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  },
  {
    id: 6,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/c.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  },
  {
    id: 7,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/c.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  },
  {
    id: 8,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/c.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  },
  {
    id: 9,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/c.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  },
  {
    id: 4,
    name: "Fashion",
    imageUrl: "http://pmusic.oss-cn-hangzhou.aliyuncs.com/image/a.jpeg",
    count: 12,
    favorite: 10,
    author: "King"
  }
];

export default class Home extends Component {
    render() {
        return (
          <Content>
            <TopCarousel />
            <div className="song-list">
              <h2>精选歌单</h2>
              <div className="list">
                {SONGLIST.map(s => {
                  return (
                    <Card
                      className="list-card"
                      key={s.id}
                      cover={<img alt={s.name} src={s.imageUrl} />}
                    >
                      <Meta
                        title={s.name}
                        description={
                          <p>
                            播放量:{s.count} 收藏量:
                            {s.favorite}
                          </p>
                        }
                      />
                    </Card>
                  );
                })}
                <div className="list-item" />
              </div>
            </div>
            <div className="new-song">
              <h2>新歌首发</h2>
              <div className="list">
                {SONGLIST.map(s => {
                  return (
                    <Card
                      className="list-card"
                      key={s.id}
                      cover={<img alt={s.name} src={s.imageUrl} />}
                    >
                      <Meta
                        title={s.name}
                        description={
                          <p>
                            播放量:{s.count} 收藏量:
                            {s.favorite}
                          </p>
                        }
                      />
                    </Card>
                  );
                })}
              </div>
            </div>
            <div className="singer">
              <h2>入住歌手</h2>
              <div className="list">
                {SONGLIST.map(s => {
                  return (
                    <Card
                      className="list-card"
                      key={s.id}
                      cover={<img alt={s.name} src={s.imageUrl} />}
                    >
                      <Meta
                        title={s.name}
                        description={
                          <p>
                            播放量:{s.count} 收藏量:
                            {s.favorite}
                          </p>
                        }
                      />
                    </Card>
                  );
                })}
              </div>
            </div>
          </Content>
        );
    }
}