// function addTwoNumbers(num1,num2){
//    console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
     let result = num1 + num2
     return result
 }

 function loginUserMessage(username = "sam"){
    if(username === undefined || !username){
        console.log('please enter username'); 
    }

    return `${username} just logged in`
   
 }

let result = addTwoNumbers(3,4)

console.log(loginUserMessage("hello"));

function calculateCartPrice(va1,val2, ...num1){
       return num1
}

console.log(calculateCartPrice(100,200,300,400));

function handleObject(anyObject){
    console.log(`${anyObject.username} about price ${anyObject.price}`);
}

handleObject({
    username:"hello",
    price :20
})

const newArray =[200,400,500,600]

function returnScondValue(getArray){
 return getArray[2]
}

// console.log(returnScondValue(newArray));
console.log(returnScondValue([100,200]));