"use strict"

// Immediatley Ressolved
/*
var myPromise = Promise.resolve('Boi');

myPromise.then((response) => console.log(response));


var myPromise = new Promise(function(resolve, reject){
  setTimeout(() => resolve(5), 2000);
});

myPromise.then((Response) => {
  Response +=12;
  console.log(Response);
});

*/
/*
function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else {
        reject({
          status: this.status,
          status: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: this.status,
        status: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('Get', 'https://jsonplaceholder.typicode.com/users').then(function(data){
  console.log(data);
}).catch(function(err){
  console.log(err);
});
*/

function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
        resolve(xhr.response);
      }else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

getData('GET', 'https://jsonplaceholder.typicode.com/users').then(function(data){
  let users = JSON.parse(data);
  let output = '';
  for(let user of users){
    output += `
      <li>
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
      </li>
    `;
  }

  document.getElementById('template').innerHTML = output;
}).catch(function(err){
  console.log(err);
});