// object literal (just create a object)

const user = {
     username:"rim",
     getUserdetails : function(){
//console.log("got user details from database");
     //console.log(`username:${this.username}`);
console.log(this);

    }
}
//console.log(user.username);
//console.log(user.getUserdetails())

// constructor 

// const promiseOne = new Promise()  // new is constructor function
// const date = new Date

function User(username, loginCount, IsLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.IsLoggedIn = IsLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}
const userOne =new  User("rimshaeman",21,true)
const userTwo =new  User("eman",211,true)
console.log(userOne);
console.log(userTwo);