"use strict"

let animal = 'panda';
function makeUpperCase(word){
  return word.toUpperCase();
}


//this one better
let template = 
`<h3>${makeUpperCase('ohh well')}, ${animal} </h3>
<p>This is a nice temple</p>`;

/*
let template = 
'<h3>Ohh Well</h3>'+
'<p>This is a nice temple</p>';
*/

document.getElementById('template').innerHTML = template;

