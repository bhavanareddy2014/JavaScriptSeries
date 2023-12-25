const myArr = [1,2,3]

 const newArr = myArr.reduce((acc,item) => {
    console.log(`item ${item} acc ${acc}`);
   return  acc + item
},3)

console.log(newArr);