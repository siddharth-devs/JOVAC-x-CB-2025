// Let Datatype
let x = 10;
console.log(x);
// Changing the value of x
x = 20;
console.log(x);
let name = "John";
// Changing the value of name
name = "varun";
console.log(name);



// Const Datatype
const fullName = "Siddharth Agrawal";
console.log(fullName);
// fullName = "Radhika Singh";
// console.log(fullName); // This will throw an error because we cannot change the value of a constant variable



// This function takes two numbers as arguments and returns their sum
function sumofTwo(a, b) {
    let sum = a + b;
    return sum;
}
console.log(sumofTwo(15, 4));


// Var datatype
var age = 25;
console.log(age);
// Changing the value of age
age = 30;
console.log(age);

//function with no return value
function sum(a, b) {
    console.log(a + b);
}
sum(10, 20);

//Lexical Scope
function a() {
    var x = 10;
    console.log(x);
    console.log(y);
    b();
    function b() {
        var y = 20;
        console.log(y);
        c();
        function c() {
            var z = 30;
            console.log(z);
            console.log(y);
            console.log(x);
        }
    }
}
a();

// SetTimeout
setTimeout(()=>{
     console.log("Hello I am setTimeout Function i'll after 2 secs");
 },6000);


 //SetInterval
setInterval(()=>{
     console.log("Hello I am setInterval function i'll run after 2 secs");
 },2000);


 //For Loop
 for (var i = 0; i <= 4; i++) {
     function closuress(i) {
         setTimeout(() => {
             console.log(i);
         }, i * 1000)
     }
     closuress(i);
}


//Event Listeners
document.getElementById("functionCall").addEventListener("click",function abc(){
    console.log("EVENT HAPPENED!!")
})