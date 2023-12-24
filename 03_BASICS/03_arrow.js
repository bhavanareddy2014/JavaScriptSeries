const user = {
    username:"bhavana",
    price :99,
    welcomeMessage: function(){
    // console.log(`${this.username}`);
    // console.log(this);
    }
}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//* global object is window object ex click,onSubmit etc..


//we can't access this inside function
// function one(){ 
//     let username = "hello"
//     console.log(this.username);
// }

// one()

// const  one = () => { 
//     let username = "hello"
//     console.log(this.username,this); // undefined {}
// }

// one()

// const addTwo = (num1,num2) =>  {
//     return num1 + num2 
// } 

//const addTwo =  (num1,num2) => (num1 + num2)

// const addTwo = (num1,num2) =>   num1 + num2 // implicit return 

const addTwo =  (num1,num2) => ({username:"bhavana"})


console.log(addTwo(9,8));

const myArray =  [2,5,6,7]

myArray.forEach()