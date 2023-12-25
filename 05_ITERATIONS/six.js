// const arr = ["js","ruby","phython","cpp"]

//  const newArray  = arr.forEach(element => {
//     console.log(element); 
// });

// console.log(newArray); // undefined

// for each will not return anything


const numbers = [1,2,3,4,5,6,7,8,9,10]

//const newNum = numbers.filter((num) => num > 4)
// const newNum = numbers.filter((num) => {
//     return num >4
// })

// const newNums = []

// numbers.forEach((num) => {
//   if(num >4){
//     return  newNums.push(num)
//   }
// })


// console.log(newNums);

const userBooks =  books.filter((book) => book.genre === "history" )

console.log(userBooks);

const userBook = books.filter((book) => {
     return  book.publish >=2000 && book.genre === "history"})