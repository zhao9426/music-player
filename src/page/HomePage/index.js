import React, { Component } from "react";
import { Layout, Card, Divider } from "antd";
import TopCarousel from "../../components/TopCarousel";
import { toJS } from 'mobx'/* tojs把可观察对象转换为js对象 */
import { observer } from "mobx-react";
import "./home.less";

const { Content } = Layout;
const { Meta } = Card;

@observer
export default class Home extends Component {

  componentDidMount() {
    const { hstore } = this.props;
    hstore.getHomeSingers({ limit: 12 });
    hstore.getHomeSongs({ limit: 12 });
    hstore.getHomeSongList({ limit: 12 });
  }

  jumpToPlaySong(songList) {
    const { history } = this.props;
    history.push(`/song/list/${songList.id}`)
  }

  jumpTo(type, data) {
    const { history } = this.props;
    switch (type) {
      case 'singer':
        history.push(`/singer/${data.id}`);
        break;
      case 'song-list':
        history.push(`/song/list/${data.id}`);
        break;
      case 'song':
        history.push(`/song/play/${data.id}`);
        break;
    }
  }

  render() {
    const { singers, songs, songList } = this.props.hstore;
    let slist = toJS(songList);
    let newSongList = toJS(songs);
    let newSingers = toJS(singers);

    return (
      <Content>
        <TopCarousel />
        <Divider style={{ height: 46, margin: 0 }} />
        <div className="song-list">
          <h2>精选歌单</h2>
          <div className="list">
            {slist.map(s => {
              return (
                <Card
                  onClick={this.jumpTo.bind(this, 'song-list', s)}
                  className="list-card"
                  key={s.id}
                  cover={<img alt={s.name} src={s.poster} />}
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
            {newSongList.map(s => {
              return (
                <Card
                  className="list-card"
                  key={s.id}
                  onClick={this.jumpTo.bind(this, 'song', s)}
                  cover={<img alt={s.name} src={s.poster} />}
                >
                  <Meta
                    title={s.name}
                    description={
                      <p>
                        下载量:{s.download} 收藏量:
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
            {newSingers.map(s => {
              return (
                <Card
                  onClick={this.jumpTo.bind(this, 'singer', s)}
                  className="list-card"
                  key={s.id}
                  cover={<img alt={s.name} src={s.avatarUrl} />}
                >
                  <Meta
                    title={s.name}
                    description={<p>关注:{s.follower}</p>}
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