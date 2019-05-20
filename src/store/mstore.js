import {
    observable,
    action,
  /*   computed,
    observe,
    toJS,
    spy */
} from "mobx";

import ManageService  from '../services/manageService';

class Store {
  // @observable todos = [];
  @observable userList = []; // 用户列表
  @observable songList = []; // 歌曲列表
  @observable songListList = []; // 歌单列表
  @observable singerList = []; //歌手列表

  /*     disposers = [];
    constructor() {
        observe(this.todos, change => {
            this.disposers.forEach(disposer => disposer());
            this.disposers = [];
            for (const todo of change.object) {
                let disposer = observe(todo, changex => {
                    this.save();
                    // console.log(changex);
                });
                this.disposers.push(disposer);
            }
            this.save();
            // console.log(change);   
        });
    } */
  // 获取用户列表
  @action.bound getUserList(query) {
    ManageService.fetchUserList(query).then(res => {
      this.userList = res.data;
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
  @action.bound getSingerList(query) {
    ManageService.fetchSingerList(query).then(list => {
      this.singerList = list.data;
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
  @action.bound getSongList(query) {
    ManageService.fetchSongList(query).then(res => {
      this.songList = res.data;
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
  @action.bound getSongListList(query) {
    ManageService.fetchSongListList(query).then(res => {
      this.songListList = res.data;
    });
  }
  //创建歌单列表
  @action.bound createSongList(songlist, callback) {
    ManageService.addSongList(songlist).then(res => {
      console.log(songlist, res);
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

  /*     save() {
        localStorage.setItem('todos', JSON.stringify(toJS(this.todos)));
        console.log(toJS(this.todos));
    }

    @computed get left() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @action.bound createTodo(title) {
        this.todos.unshift(new Todo(title))
    }

    @action.bound removeTodo(todo) {
        this.todos.remove(todo);
    } */
}

/* spy(event => {
    console.log(event);  
}) */
/* class Todo {
    id = Math.random();
    @observable title = '';
    @observable finished = false;

    @action.bound toggle() {
        this.finished = !this.finished;
    }
    constructor(title) {
        this.title = title;
    }
}
 */
/* class User {
    id
    @observable name;
    @observable pwd;
    @observable created_at;
    @observable updated_at;
}
 */
const mstore = new Store();

export default mstore;