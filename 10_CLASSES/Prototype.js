// let myName = "bhavana     ";

// console.log(myName.length);

// console.log(myName.trueLength);


let myHeroes = ["spiderman,superman"]

let heroPower = {
     spiderman : "sling",
     superman:"see-saw",

     getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
     }
}

Object.prototype.bhavana = function (){
 console.log(`hitesh is present in all objects`);
}

Array.prototype.heyBhavana = function (){
    console.log(`Bhavana in Array ${myHeroes}`);
}

myHeroes.heyBhavana()

const User ={
     name:"chai",
     gmail:"bhavana@gmail.com"
}



const Teacher = {                                        
    makeVideo: true
}

const TeachingSupport = {
    isAvalable : false
}


const TASupport = {
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__: TeachingSupport
}


Teacher.__proto__ =  User


//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherName = "Chai aur code    "

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherName.truelength()

"hitesh".truelength()