import {
    observable,
    action,
    computed,
    observe,
} from "mobx";

import store from 'store2';
import HomeService  from '../services/HomeService';
import LoginService from '../services/loginServce';

class HStore {
  @observable loginUser = {};
  @observable isLogin = false;
  @observable singers = []; //歌手列表
  @observable songs = []; // 歌曲列表
  @observable songList = []; // 歌单列表
  @observable categories = []; // 歌曲类别
  @observable rankList = []; //排行榜
  @observable currentCategory = {}; // 排行榜选中的类别

  @action.bound login(name, pwd, callback){
    LoginService.login({name, pwd}).then(res => {
        if(res.login){
          this.isLogin = true;
          store.session("user", res.data);
          this.loginUser = res.data;
        } else {
          this.isLogin = false;
          this.loginUser = {};
        }
        callback && callback(this.isLogin)
    })
  }
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
      this.currentCategory = res.data[0];
      this.getRankList(res.data[0].type)
    });
  }

  @action.bound selectCategory(type){
    this.currentCategory = this.categories.find(c => c.type == type)
  }

  @action.bound getRankList(query){
    HomeService.fetchRankList(query).then(res => {
      this.rankList = res.data
    });
  }
}

const hstore = new HStore();

export default hstore;