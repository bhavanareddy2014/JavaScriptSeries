function multiplyby5(num) {
    this.num = num
     return num * 5;
}

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printme =  function(){
    console.log(`score is ${this.score}`);
}

const chai = new  createUser("Chai",25)

const tea = createUser("tea",250)

chai.printme()