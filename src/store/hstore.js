import {
    observable,
    action,
    computed,
    observe,
    toJS,
    spy
} from "mobx";

import HomeService  from '../services/HomeService';

class HStore {
  @observable singer = []; //歌手列表
  @observable song = []; // 歌曲列表
  @observable songList = []; // 歌单列表

  // 获取用户列表
  @action.bound getUserList() {
    ManageService.fetchUserList().then(list => {
      this.userList = observable.array(list);
    });
  }
  // 创建用户
  @action.bound createUser(user, callback) {
    ManageService.addUser(user).then(res => {
      callback(res);
    });
  }
  // 更新用户
  @action.bound updateUser(id, user, callback) {
    ManageService.updateUser(id, user).then(res => {
      callback(res);
    });
  }
  // 删除用户
  @action deleteUser(user) {
    ManageService.deleteUser(user.id).then(res => {
      this.getUserList();
    });
    let s = this.userList.remove(user);
  }

  // 获取歌手列表
  @action.bound getSingerList() {
    ManageService.fetchSingerList().then(list => {
      this.singerList = observable.array(list.data);
    });
  }
  // 创建歌手
  @action.bound createSinger(singer, callback) {
    ManageService.addSinger(singer).then(res => {
      callback(res);
    });
  }
  // 更新歌手
  @action.bound updateSinger(id, singer, callback) {
    ManageService.updateSinger(id, singer).then(res => {
      callback(res);
    });
  }
  // 删除歌手
  @action deleteSinger(singer) {
    ManageService.deleteSinger(singer.id).then(res => {
      this.getSingerList();
    });
    let s = this.singerList.remove(singer);
  }

  // 获取歌曲列表
  @action.bound getSongList() {
    ManageService.fetchSongList().then(res => {
      this.songList = res;
    });
  }
  //创建歌曲列表
  @action.bound createSong(user, callback) {
    ManageService.addSong(user).then(res => {
      callback(res);
    });
  }
  // 更新歌曲
  @action.bound updateSong(id, song, callback) {
    ManageService.updateSong(id, song).then(res => {
      callback(res);
    });
  }
  // 删除歌曲
  @action.bound deleteSong(song) {
    ManageService.deleteSong(song.id).then(res => {
      this.getSongList();
    });
  }

  // 获取歌单列表
  @action.bound getSongListList(keyword) {
    ManageService.fetchSongListList(keyword).then(res => {
      this.songListList = res.data;
    });
  }
  //创建歌单列表
  @action.bound createSongList(songlist, callback) {
    ManageService.addSongList(songlist).then(res => {
      callback(res);
    });
  }
  // 更新歌单
  @action.bound updateSongList(id, song, callback) {
    ManageService.updateSongList(id, song).then(res => {
      callback(res);
    });
  }
  // 删除歌单
  @action.bound deleteSongList(songlist) {
    ManageService.deleteSongList(songlist.id).then(res => {
      this.getSongListList();
    });
  }

const hstore = new HStore();

export default hstore;