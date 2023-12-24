//for

for (let i = 0; i <=10; i++) {

    const element = i;
    if (element == 5) {
        // console.log("5 is best");
    }
    // console.log(element);
    
}

// console.log(element); // not accessable


for (let i = 0; i <= 10; i++) {
    console.log(`outerloop ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`innerloop ${j}`);
        // const element = array[j];
        
    }
    // const element = array[i];
    
}

let myArr = ["superman","spiderman","flask"];

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];

//     console.log(element);
    
// }

// break and continue

// for (let i = 0; i < 20; i++) {
//     if(i === 5){
//         console.log("detected 5");
//         break
//     }
    
//      console.log(i);
    
// }

for (let i = 0; i < 20; i++) {
    if(i === 5){
        console.log("detected 5"); // when reached condition it skips  the condition  which is satisfied
        continue
    }
    
     console.log(i);
    
}

//0
// 1
// 2
// 3
// 4
// detected 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19