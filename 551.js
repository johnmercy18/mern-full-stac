/* let fruits=["Apple","Banana","grapes"];

fruits.push("cherry");   
fruits.pop();
fruits.unshift("cherry");


fruits.forEach(fruits => console.log(fruits)); */

//objects

/*let person ={
    name:"Mercy",
    age:30,
    greet:function(){
        return `Hello,my name is ${this.name}`;
    },
};
console.log(person.name);
console.log(person.greet());*/

//error handling
try{
    let result=JSON.parse("Invalid JSON");
}catch(error){
    console.log("Error caught:",error.message);
}

//function expressions

//const greet = function(name){
    // return `Hello, ${name}!`;     
//};


//Arrow functions

//console.log(greet(Mercy));
//const greet= (name) => `Hello,${name}`;
//console.log(greet(Mercy));

//iife
/*
(function(){
   console.log("This runs right away")
})();
*/
//call back functions
/*
const greetFn=(name)=>{
    console.log(`Hello,${name}!`)
}
function processName(callback){
    const name="Mercy";
    callback(name);
}
*/
//arrays
/*let fruits=["Apple","Banana","grapes"];
fruits.forEach(fruit => console.log(fruit));
fruits.push("Mango");*/

(function(){
    console.log("This runs right away")
})();
let message= "Hello, World!";
const PI = 3.14;

function greet(name){
    return `Hello, ${name}!`;
}

console.log(greet("mercy"));
