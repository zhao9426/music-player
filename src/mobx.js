import { observable, isArrayLike } from "mobx";

const arr = observable(["a", "b", "c"]);
//console.log(arr);
//console.log(Array.isArray(arr), isArrayLike(arr));
const obj = observable({"a": 1, "b":2});
//console.log(arr[4]);
//console.log(obj)
const m = observable(new Map());
m.set("a", 1);
//console.log(m);
//console.log(m.has("a"));

var num = observable.box(20);
var str = observable.box("hello");
var b = observable.box(true);

console.log(num);
console.log(str);
console.log(b);
console.log(num.get());
console.log(str.get());
console.log(b.get());
num.set(30);
b.set(false);
console.log(num.get());
console.log(str.get());
console.log(b.get());




