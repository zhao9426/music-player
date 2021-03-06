import {
    observable,
    action,
    computed,
    observe,
} from "mobx";

import MyService  from '../services/myService';

class MyStore {
  @observable myFlowSingers = []; //我关注的歌手列表
  @observable myFavoriteSongs = []; // 我喜欢的歌曲列表
  @observable mySongList = []; // 我的歌单列表
  @observable myFavoriteSongList = []; // 我收藏的歌单列表

  // 获取我关注的歌手列表
  @action.bound getMyFlowSingers(query) {
    MyService.fetchMyFlowSinger(query).then(list => {
      this.myFlowSingers = observable.array(list.data);
    });
  }

  // 获取我喜欢的歌曲列表
  @action.bound getMyFavoriteSongs(query) {
    MyService.fetchMyFavoriteSong(query).then(res => {
      this.myFavoriteSongs = res.data;
    });
  }

   // 删除歌曲
   @action.bound deleteLikeSong(query){
    let { song_id, user_id } = query;
   HomeService.deleteLikeSong({ song_id, user_id }).then(res => {
     console.log(res);
     if(res.success){
       this.commentList.remove(comment)
     }
   });
 }

  // 获取我的歌单列表
  @action.bound getMySongList(query) {
    MyService.fetchMySongList(query).then(res => {
      this.mySongList = res.data;
    });
  }

  // 获取我收藏的歌单列表
  @action.bound getMyFavoriteSongList(query) {
    MyService.fetchMySongList(query).then(res => {
      this.myFavoriteSongList = res.data;
    });
  }
}

const mystore = new MyStore();

export default mystore;