// var // my product price
//     myOldPrice = 2000,
//     myNewPrice = 900,
//     myDiscount = myOldPrice - myNewPrice + 500; // 2000 - 900 + 500 = 1600

// document.getElementById("price").innerHTML = myDiscount;


// var mainPrice = 500,
//     mySmallDiscount = 50,
//     myMediumDiscount = 100,
//     myBigDiscount = 250;

// document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount;    // 500 - 50 = 450
// document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount;    // 500 - 100 = 400
// document.getElementById("product3").innerHTML = mainPrice - myBigDiscount;  // 500 - 250 = 250 


// var x = 5,
//     y = 5,
//     z = 6;

// document.getElementById("booleans").innerHTML = (x === y ) + "<br>" + (x === z);



// var hasDiscount = false;

// if (hasDiscount === true){
//     var mainPrice = 1000;
// } else {
//     var mainPrice = 3000;
// };

// document.getElementById("has").innerHTML = mainPrice;

// var cars = ["Saab" , "Volvo" , "BMW"];

// document.getElementById("arr").innerHTML = cars[2];


// var myInfo = {firstName:"Esraa" , lastName:"Ibrahim"};

// document.getElementById("obj").innerHTML = myInfo.firstName;



// var myName = "Osama Mohamed \"Zero\"";
// document.getElementById("test").innerHTML = myName;

// var age = 50;
// if (age !== 50){
//     alert("Good");
// } else {
//     alert("Bad")
// }


// var 
//     name = "ali";
//     age = "35";
// if (age === 35 || name === "esraa"){
//     alert("Good")
// } else {
//     alert("Bad")
// }    

// var x = myFunction(4, 3);
// document.getElementById("demo").innerHTML = x;

// function myFunction(a, b){
//     return a + b;
// }
    
// function myInfo () {
//     // "use strict";
//     var myName = "Osama";
//         myAge = 39;
        
//     return 100 + 50;
// }

// var myFunction = myInfo() ;

// document.getElementById("demo").innerHTML = myFunction;

// function sayHello(theName){
//     return "Hello" + " " + theName + " "+ "How Are You Today"
// }
// document.getElementById("fff").innerHTML = sayHello("Hesham")


// function makeDiscount(price){
//     var discount = 200;

//     return price - discount;
// }

// document.getElementById("yyy").innerHTML = makeDiscount(600);


// function calcDays(age) {
//     var year = 365;

//     return age * year;
// }

// var newAge = prompt("whasts your age ?")
// document.getElementById("ppp").innerHTML = calcDays(newAge);

// function cover() {
//     var amount = document.getElementById("ooo").innerHTML;
//     alert (amount * 3.75);
// }
// cover();

// function conve() {
//     var amount = document.getElementById("dollar").value,
//         result = amount * 3.75,
//         massage = document.getElementById("massage");

//         if (amount === "") {
//             massage.innerHTML = " ادخل الرقم صحيح ";
//         } else if (isNaN(amount)){
//             massage.innerHTML = " ما قمت بادخاله ليس رقم "
//         } else if (amount === "0"){
//             massage.innerHTML = " لا تقم بادخال صفر ";
//         } else  if (amount < 0) {
//             massage.innerHTML = " ادخل الرقم اكبر من صفر ";
//         } else {
//             massage.innerHTML = amount + " Dollar Is Worth " + result + " " + "Riyal";
//         }
//     }

var myInput = document.getElementById("input"),
    myDiv = document.getElementById("div"),
    myButton = document.getElementById("button");
myButton.onkeyup = function() {
    myDiv.innerHTML = myInput.value * 3;
}
   








