// for of

// ["","",""]

// [{},{},{}]

const array =[1,2,3,4,5]

// for (const val of array) {
//     console.log(val);
// }

// const greetings = "hello world!"

// for (const val of greetings) {
//    console.log(val);   
// }

//Maps

const map =  new Map()

map.set("In","India")
map.set("US","USA")
map.set("FN","France")
map.set("In","India")

console.log(map);

for (const [key,value] of map) {

    console.log(key,"-",value);
    
}

const myObj ={
    "Game1":"NFS",
    "Game2":"FreeFire",
    "Game3": "ludo"
}

// for (const value of myObj) { // myObj not iterable

//     console.log(value);
    
// }