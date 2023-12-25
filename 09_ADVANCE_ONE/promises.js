const promise1 = new Promise( function (resolve,reject) {
    //DO an async task
    //DB calls,cryptography,network calls

    setTimeout(() => {
        console.log("Async  task is complete");
        resolve()
    }, 1000);
})

promise1.then(() =>{
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
         console.log("Async2");
         resolve()
    },1000)
}).then(function () {
    console.log("Asnc2 complete");
})

const promise3 = new Promise(function (resolve,reject){
    setTimeout(function() {
     resolve({username:"Bhavana reddy",email:"bhavana@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise (function (resolve,reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"bhavana_reddy",email:"bhavana@gmail.com"})
        }

        else {
            reject('ERROR: Something went wrong')
        }
       
    },1000)
})

 promise4
 .then((user) => {
console.log(user);
 return user.username
})
.then((username) => {
  console.log( "username",username);
})
.catch((err) => {
  console.log(err);
})
.finally(() =>  console.log("The Promise is either resolved or rejected"))



const promise5 = new Promise((resolve,reject) =>{
      setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"JavaScript",password:'123455'})
        }
        else {
            reject("Error : JS went wrong")
        }
      },1000)
})


async function consumePromise5 (){
     try {
        const response =  await promise5

    console.log("response",response);
     }
     catch (error) {
         console.log(error); 
     }
}

consumePromise5()


// async function getAllUsers(){
//     try{
//         const response =  await fetch('https://api.github.com/users/bhavanareddy2014')
//         const data = await response.json()
//       console.log(data);
//     }
//     catch (error){
//         console.log(error);
//     }   
// }

// getAllUsers()

fetch('https://api.github.com/users/bhavanareddy2014')
.then((response) => {
    // console.log( "response => ",response);
    return response.json()
   
})
.then((data) =>  console.log(data))
.catch((error) =>{
 console.log(error);
})