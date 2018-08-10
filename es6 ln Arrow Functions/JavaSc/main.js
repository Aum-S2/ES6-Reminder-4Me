"use strict"
/*
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
  let that = this;
  return arr.map(function(x){
    console.log(that.prefix + x);
  });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['James', 'bil']);


//arrow is shorter version
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
  return arr.map((x) => {
    console.log(this.prefix + x);
  });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['James', 'bil']);



//without arrow
let add = function(a,b){
  let sum = a+b;
  console.log(sum);
  return false;
}

add(5,6);
*/


//with arrow
let add = (a,b) =>{
  let sum = a+b;
  console.log(sum);
  return false;
}

add(5,9);