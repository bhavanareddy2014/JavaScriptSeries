const myObj = {
    js: "javascript",
    cpp: "c++",
    java:"java"
}


console.log(Object.entries(myObj)); // [ [ 'js', 'javascript' ], [ 'cpp', 'c++' ], [ 'java', 'java' ] ]
// for (const key in myObj) { 
//     // console.log(key);
//     // console.log(myObj[key]);
// }


// const program = ["ruby","java","phython"]

// for (const key in program) {
//    console.log(key); // 0,1,2
// }



// const map =  new Map()

// map.set("In","India")
// map.set("US","USA")
// map.set("FN","France")
// map.set("In","India")

// // console.log(map);

// for (const [key,value] in map) {

//     console.log(key,"-",value); // non iterable
    
// }