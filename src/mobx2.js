import { observable, isArrayLike, computed, autorun, when, reaction, action, runInAction } from "mobx";

class Store {
    @observable array = [];
    @observable obj = {};
    @observable map = new Map();

    @observable str = 'hello';
    @observable number = 20;
    @observable b = true;
    @computed get mixed(){
        return store.str + '/' + store.number;
    }
    @action.bound bar(){
        this.str = "hello";
        this.number = 40;
    }
}

var store  = new Store();
/*
var foo = computed(function(){
    return store.str + "/" + store.number
});

console.log(foo);
console.log(foo.get());
foo.observe(function(change){
    console.log(change); 
});

store.str = "world";
store.number = 23; */

store.str = "world";
/* 
autorun(()=> {
    console.log(store.mixed);
    
    //console.log(store.str + "/" + store.number);
});

store.number = 23;

when(()=> store.b, ()=> console.log("it's true")) */

store.str = "world";
reaction(()=> [store.str, store.number], arr => console.log(arr.join("/")))
store.number = 23;
// var bar = store.bar;
// bar();

runInAction(()=> {
    store.str = "H";
    store.number = 10;
});

runInAction('modify',() => {
    store.str = "M";
    store.number = 60;
});









