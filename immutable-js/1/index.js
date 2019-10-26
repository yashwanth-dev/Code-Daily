// import {List} from "immutable";
const {List, Map} = require("immutable");

var list = List.of(1,2,3);
console.log(list);
let list2 = list.push(4);
console.log(list2);
console.log(list === list2);

const Map1 = Map({a:1,b:2,c:3});
const Map2 = Map1.set('b',50);
console.log(Map1.get('b'));
console.log(Map2.get('b'));