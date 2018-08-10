"use strict"

function *generator01(){
  console.log('Hello');
  yield 'Yield 1 ran..';
  console.log('world');
  yield 'Yield 2 ran..';
  console.log('(¤|¤)_/');
  yield 'Yield 3 ran..';
  return 'returned';
}

let gnrt = generator01();
//console.log(gnrt.next());
/*
console.log(gnrt.next().value);
console.log(gnrt.next().value);
console.log(gnrt.next().value);
console.log(gnrt.next().value);
*/

for(let lpVal of gnrt){
  console.log(lpVal);
}