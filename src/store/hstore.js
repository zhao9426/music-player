import {
    observable,
    action,
    computed,
    observe,
} from "mobx";

import HomeService  from '../services/HomeService';

class HStore {
  @observable singers = []; //歌手列表
  @observable songs = []; // 歌曲列表
  @observable songList = []; // 歌单列表
  @observable categories = []; // 歌曲类别
  @observable rankList = []; //排行榜

  // 获取歌手列表
  @action.bound getHomeSingers() {
    HomeService.fetchHomeSinger().then(list => {
      this.singers = observable.array(list.data);
    });
  }

  // 获取新歌列表
  @action.bound getHomeSongs() {
    HomeService.fetchHomeNewSong().then(res => {
      this.songs = res.data;
    });
  }

  // 获取歌单列表
  @action.bound getHomeSongList() {
    HomeService.fetchHomeSongList().then(res => {
      this.songList = res.data;
    });
  }

  // 获取歌曲类别
  @action.bound getCategries() {
    HomeService.fetchCategories().then(res => {
      this.categories = res.data;
    });
  }

  @action.bound getRankList(query){
    HomeService.fetchRankList(query).then(res => {
      this.rankList = res.data
    });
  }
}

const hstore = new HStore();

export default hstore;