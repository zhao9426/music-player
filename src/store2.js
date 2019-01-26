import { 
    observable, 
    action,
    computed,
    observe,
    toJS,
    spy
} from "mobx";

class Store {
    @observable todos = [];

    disposers = [];
    constructor(){
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
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(toJS(this.todos)));
        console.log(toJS(this.todos));
    }

    @computed get left() {
        return this.todos.filter(todo => !todo.finished).length;
    }
    @action.bound createTodo(title) {
        this.todos.unshift(new Todo(title))
    }

    @action.bound removeTodo(todo){
        this.todos.remove(todo);
    }
}

/* spy(event => {
    console.log(event);  
}) */
class Todo {
    id = Math.random();
    @observable title = '';
    @observable finished = false;

    @action.bound toggle(){
        this.finished = ! this.finished;
    }
    constructor(title){
        this.title = title;
    }
}

const store = new Store();

export default store;