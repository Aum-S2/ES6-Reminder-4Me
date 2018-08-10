"use strict"
/*
let myArray = [12,26,37,42,55];
let mySet = new Set(myArray);

mySet.add('90');
mySet.add({a: 1, b: 2});
mySet.delete(42);
// mySet.clear();
mySet.add('77');
mySet.add('120');

// console.log(mySet);
// console.log(mySet.size);

mySet.forEach(function(loopItAll){
  console.log(loopItAll);
});


//map
let myMap = new Map([['Q1','Morning'], ['Q2', 'Farewell']]);
myMap.set('Q3', 'Impossible');
myMap.delete('Q2');

// console.log(myMap);
console.log(myMap.size);


let pcWeakSet = new WeakSet();

let cpu1 = {
  make: 'amd',
  model: 'ryzen'
}
pcWeakSet.add(cpu1);

let cpu2 = {
  make: 'intel',
  model: 'coffe lake'
}
pcWeakSet.add(cpu2);

pcWeakSet.delete(cpu2);
console.log(pcWeakSet);
*/

let cpuWeakMap = new WeakMap();

let key1 = {
  id: 1
}

let cpu1 = {
  make: 'amd',
  model: 'ryzen'
}

let key2 = {
  id: 2
}

let cpu2 = {
  make: 'intel',
  model: 'coffe lake'
}

cpuWeakMap.set(key1, cpu1);
cpuWeakMap.set(key2, cpu2);

cpuWeakMap.delete(key2);

console.log(cpuWeakMap);