const user = {
    username:"bhavana",
    loginCount:9,
    signedIn:true,
    getUserDetails:function (){
        console.log("user details ");
        console.log(this);
        // console.log(this.username);
    }
}

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("hitesh",12,true);
const userTwo = new User("reddy",11,false);

console.log(userOne.constructor);

// console.log(userTwo);

// console.log(user.getUserDetails());