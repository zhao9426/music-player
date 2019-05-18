import {
    observable,
    action,
} from "mobx";

import store from 'store2';
import HomeService, { createComment }  from '../services/HomeService';
import LoginService from '../services/loginServce';
// fetchCommentList,
// createComment,
// deleteComment

class HStore {
  @observable loginUser = {};
  @observable isLogin = false;
  @observable singers = []; //歌手列表
  @observable songs = []; // 歌曲列表
  @observable singerInfo = {}; // 歌手信息
  @observable songList = []; // 歌单列表
  @observable categories = []; // 歌曲类别
  @observable rankList = []; //排行榜
  @observable currentCategory = {}; // 排行榜选中的类别
  @observable commentList = []; //评论列表
  @observable currentSong = {}; //当前播放的歌曲

  @action.bound login(name, pwd, callback){/* action修改状态的东西，返回的是一个函数 */
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

  @action.bound logout(callback){
    this.isLogin = false;
    this.loginUser = {};
    callback && callback(this.isLogin)
  }
  // 获取歌手列表
  @action.bound getHomeSingers(query) {
    HomeService.fetchHomeSinger(query).then(list => {
      this.singers = observable.array(list.data);
    });
  }

  // 获取新歌列表
  @action.bound getHomeSongs(query) {
    HomeService.fetchHomeNewSong(query).then(res => {
      this.songs = (res && res.data)||[];
    });
  }

  @action.bound getSong(songId){
    HomeService.fetchSong(songId).then(res => {
      this.currentSong = (res && res.data)||[];
    });
  }

  // 获取歌单列表
  @action.bound getHomeSongList(query) {
    HomeService.fetchHomeSongList(query).then(res => {
      this.songList = (res && res.data)||[];
    });
  }

  @action.bound favoriteSongList(data){
    HomeService.favoriteSongList(data).then(res => {
      console.log(res);
      
      //this.songList = res.data;
    });
  }

  // 获取歌曲类别
  @action.bound getCategries() {
    HomeService.fetchCategories().then(res => {
      this.categories = res.data;
      this.currentCategory = res.data[0];
      this.getRankList({ category: res.data[0].type, limit: 12 })
    });
  }

  @action.bound getSingerInfo(id) {
    console.log(id,"hhjjj")
    HomeService.fetchSingerInfo(id).then(res => {
      this.singerInfo = res.data;
    });
  }

  @action.bound selectCategory(type){
    this.currentCategory = this.categories.find(c => c.type == type)
  }
  // 获取排行榜中某个类别歌曲的列表
  @action.bound getRankList(query){
    HomeService.fetchRankList(query).then(res => {
      this.rankList = res.data
    });
  }
  // 发表评论
  @action.bound createComment(data, callback){
    HomeService.createComment(data).then(res => {
      const { topic_id: topicId, topic_type: topicType} = data;
      let query = { topicId, topicType };
      this.getCommentList(query)
      callback && callback();
    });
  }

   // 删除评论
   @action.bound deleteComment(comment){
     let id = comment.id;
     let { from_uid: fromId, topic_id: topicId, topic_type: topicType } = comment;

    HomeService.deleteComment(id, {fromId, topicId, topicType }).then(res => {
      console.log(res);
     // const { topic_id: topicId, topic_type: topicType} = data;
     // let query = { topicId, topicType };
      if(res.success){
        this.commentList.remove(comment)
      }
     // this.getCommentList(query)
     // callback && callback();
    });
  }

  // 获取评论列表
  @action.bound getCommentList(query){
    HomeService.fetchCommentList(query).then(res => {
      this.commentList = res.data;
    })
  }
}

const hstore = new HStore();

export default hstore;