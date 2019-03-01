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
    @observable userList = [];
    @observable songList = [];

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

    @action.bound getUserList(){
        ManageService.fetchUserList().then(list => {
            this.userList = observable.array(list);
        });
    }

    @action.bound getSongList() {
        ManageService.fetchSongList().then(res => {
            this.songList = res.data;
        });
    }

    @action.bound createUser(user, callback){
        ManageService.addUser(user).then( user => {
            this.userList.push(user);
            if(user && callback){
                callback(user)
            }
        })
    }

    @action deleteUser(user){
        ManageService.deleteUser(user.id).then( res => {
            console.log(res, "res");
            this.getUserList();
        })
        // console.log(user.name,'kk');
        // let index = this.userList.findIndex(u => u.id === user.id);
        // if(index !== -1){
        //     let u = this.userList.splice(index, 1);
        //     console.log(u);
            
        // }

       let s = this.userList.remove(user);
       console.log(s, "dd");
       
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