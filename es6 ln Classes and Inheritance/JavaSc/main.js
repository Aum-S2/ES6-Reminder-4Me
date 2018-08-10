"use strict"

class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers(){
    console.log('there are 65 users');
  }

  resister(){
    console.log(this.username+ ' is now resgistered');
  }
}

//let lul = new User('lul', 'lul@gmail.com', 'kappa123');

//lul.resister();

//User.countUsers();

class Member extends User{
  constructor(username, email, password, memberPackage){
    super (username, email, password);
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username+' is subscribed to the '+this.package+' package');
  }

}

let mike = new Member('mike', 'mike@gmail.com', 'mypass121', 'standard');
let sara = new Member('sara', 'sara@gmail.com', 'mypass122', 'premium');

//sara.getPackage();
mike.resister();
