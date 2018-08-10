"use strict"
/*
function welcome($welcoming = 'hello world'){
  console.log($welcoming);
}

welcome();
*/

let args1 = [1,2,3];
let args2 = [4,5,6]; 

function test(){
  console.log(args1+','+args2);
}

// test.apply(null, args);
test(...args1,...args2);