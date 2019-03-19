import {
    observable,
    action,
    computed,
    observe,
    toJS,
    spy
} from "mobx";

import ManageService  from '../services/manageService';

class Store {
  // @observable todos = [];
  @observable userList = []; // 用户列表
  @observable songList = []; // 歌曲列表
  @observable songListList = []; // 歌单列表

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
  // 获取歌曲列表
  @action.bound getSongList() {
    ManageService.fetchSongList().then(res => {
      this.songList = res.data;
    });
  }
  // 删除歌曲
  @action.bound deleteSong(song) {
    ManageService.deleteSong(song.id).then(res => {
      console.log(res);
      this.getSongList();
    });
  }
  // 获取歌单列表
  @action.bound getSongListList() {
    ManageService.fetchSongListList().then(res => { 
      this.songListList = res.data;
    });
  }
  // 删除歌单
  @action.bound deleteSongList(song) {
    ManageService.deleteSongList(song.id).then(res => {
      console.log(res);
      this.getSongList();
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
class User {
    id
    @observable name;
    @observable pwd;
    @observable created_at;
    @observable updated_at;
}

const mstore = new Store();

export default mstore;