
// var c =200 // global scope

let a = 400
if(true){    // block scope
    let a = 10
    const b= 20
    // var c = 40
    // console.log(a);
}

// console.log(a); 
// console.log(b);
// console.log(a);


function one(){
    const username = "bhavana"

    function two(){
        const website = "website"
        console.log(username);
    }
    two()

    // console.log(website);
}

one()

if(true){
    const username = "hello master"
    if(username === "hello master"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addOne(2));
console.log(addTwo(3));

function addOne(num){
  return num +1
}

addOne(5)

const addTwo = function (num) {
     return num + 2 
}

addTwo(5)