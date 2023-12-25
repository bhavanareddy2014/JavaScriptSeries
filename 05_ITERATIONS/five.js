const arr = ["js","ruby","phython","cpp"]

// arr.forEach(element => {
//     console.log(element);
// });

// function printme (item) {
//     console.log(item);
// }

// arr.forEach(printme)  // need to give reference not to execute


arr.forEach((item,index,arr) => {
    console.log(item,index,arr);
});

const myCoding = [{
    langName:"javascript",
    fileName:"js"
},
{
    langName:"java",
    fileName:"java"
},
{
    langName:"ruby",
    fileName:"ruby"
}

] 

myCoding.forEach((item) => {
   console.log(item.langName);
})