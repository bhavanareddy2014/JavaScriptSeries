const userEmail = "bhavana@gmail.com" // true
 
// const userEmail = "" //assumes false

//Truthy values

// "0",'false'," ",[],{},function() {}

//falsy values

//false,0,-0,BigInt, 0n,"",null,undefined,NaN

if(userEmail){
console.log("got user email");
}else {
console.log("dont have user email");
}

// const array = []

// if(array.length === 0 ){
// console.log("array empty");
// }

const obj = {}

if(Object.keys(obj).length ===0){
    console.log("obj empty");
}

// false == 0 //true
// false == "" // true
// "" == 0 //true


// nullish coalesing operator (??): null undefined

let val1

val1 = 10 ?? 100

val1 = null ?? 10 // will give 10 as it checks null 

val1 = undefined ?? 15 // 15

val1 = null ?? undefined // undefined
 
val1 = undefined ?? null // null

val1 = null ?? 10 ?? 20 // 10

console.log(val1);

// ternary operator

condition ? true : false