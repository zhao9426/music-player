import { observable, isArrayLike } from "mobx";

// const arr = observable(["a", "b", "c"]);
// const b = observable(["s", 'c', 'a', 'd']);
// arr.length = 0;
// console.log(arr);
// console.log(arr.splice(0,arr.length));
// arr.clear();
// arr.intercept(t => console.log('>>>', t));
// arr.push("e");
// console.log(arr);

// console.log(Array.isArray(arr));
// console.log(observable.array(["a", "b", "c"]));

// console.log(Array.isArray(arr), isArrayLike(5));
//  const obj = observable({"a": 1, "b":2});
//console.log(arr[4]);
// console.log(obj)

//obj.set('a', 3)
// console.log(obj.a);

// const m = observable(new Map());
// m.set("a", 1);
// console.log(m.get('a'));
// console.log(m.has("a"));



var num = observable.box(20);
//var str = observable.box("hello");
//var b = observable.box(true);
num.intercept((t) => {
    console.log(t);
    return t;});
// console.log(num);
// console.log(str);
// console.log(b);
console.log(num.get());
//console.log(str.get());
//console.log(b.get());
num.set(30);
//num = 36;
//b.set(false);
console.log(num.get());
//console.log(str.get());
//console.log(b.get()); 
//console.log(num);





