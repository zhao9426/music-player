import {
    observable,
    action,
    computed,
    observe,
} from "mobx";

import PlayService  from '../services/PlayService';

class SlStore {
  @observable songs = {}; // 歌曲列表
  // 获取歌曲类别
  @action.bound getSongs(id) {
    PlayService.fetchSongs({id}).then(res => {
      this.songs = res.data;
    });
  }
}

const slstore = new SlStore();

export default slstore;