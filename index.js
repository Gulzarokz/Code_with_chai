    // variabale and its types

    //  const accountId = 12344;
    //  let accountIEmail = "okz21301@gamil.com"
    // var accountPassward = "12345" 
    // accountCity = "peshawar"; 
    // let accountState;

    // accountId = 2; not allowed


    // console.log(accountId);

    //  accountIEmail = "gulzar67@gamil.com"
    // accountPassward = "45555666"
    // accountCity = "peshawar"
      
    // console.table([accountId, accountIEmail, accountPassward, accountCity, accountState])


    // // console.log(accountId)
    // // console.log(accountIEmail)
    // // console.log(accountPassward)
    // // console.log(accountCity)





    // lecture 05 datatype

    //  let name = "Gulzar"  // string data type
    //  let age = 28       // number data type
    //  let isLoginIn = false // boolean datatype

    //  null // standalone value  undefined 

    //  state = null
    //  console.log(typeof null)


    // lecture 06 data type conversion
    

    // let score = "33abc";
    // let score = null
    //    let score = false
    //    let  score = "Gulzar "
    // console.log(typeof score);


    // let valueInNumber = Number(score)
    // console.log(typeof valueInNumber)
    // console.log(valueInNumber)



    // let isLoginIn = "gulzar"
    // let booleanIsLoggedIn = Boolean(isLoginIn)
    // console.log( booleanIsLoggedIn)

    // let someNumber = 33
    // let NumberToString = String(someNumber)
    // console.log(typeof NumberToString)
// 


// operation in javascript

// let value = 3
// let negVlaue = -value;
// console.log(negVlaue)

// console.log(1 + 2 + "2")
// console.log("1" + 2 + 2);


// let gameCounter = 100;
// // gameCounter++;
// ++gameCounter;
// console.log(gameCounter)


// Conversions  operator in javaScript;

//   
// primative DataType
//  7 types , string , Number , boolean, null, undefined, symbol;
// BigInt,

//   const score = 100;
//   const scoreValue = 100.3
//   const isLoginIn = false;
//   const outSideTemp = null;
//   let userEmial;

//   const id = Symbol('123')
//   const anotherId = Symbol('123')
//   console.log(id === anotherId);



// reference types(non primitive)
// Array, object, functions

// const hero = ["shahidAfridi", "Younaskhan" "Imran khan"]

// let myObj = {
//     name: "hitesh";
//     age = 22;

 
// const myFunction = function(){
//     console.log("Hello world")
// }
// myFunction();


// String in javaSript;

// let name = "Gulzar khan";
// let myRepoAccount = 50;
// console.log(`My Name is ${name} my repo account ${myRepoAccount}`);

// string declare another way

// let gameName = new String('gulzar')
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('r'));


// let gameName = new String('gulzar')
// let newString = gameName.substring(0 , 7);
// console.log(newString);


// let anotheString = gameName.slice(-2, 5) 
// console.log(anotheString);


//  let stringOne = "   gulzar    "
//  console.log(stringOne)
//  console.log(stringOne.trim())


//  let url = ('http/www.come20%gulzarkhan')
//  console.log( url.replace('20%' , '_'))
//  console.log( url.includes("gulzarkhan"))
//  console.log( url.includes("Aiza"))


//  let gameName = new String('gulzar-khan-come')
//  console.log(gameName.split('-'));
 

// Array with chai code 
// console.log("welcome to Array");

// const myArr = [0, 1, 2, 3, 4, 5, ];
// console.log(myArr[2]);

// const myHeros =  ["afridi", "imrankhan"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeros);
// console.log(myArr2);

//Methodes of array

// const myArr = [0, 1, 2, 3, 4, 5];
// myArr.push(6); add element to the end of the array
// myArr.pop() remove last element 

// myArr.unshift(6) add Element at first index
// myArr.shift() remove element from the first Index

// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));
// const newArr = myArr.join()
// console.log(myArr);


// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(typeof newArr);



// // slice splice 
// console.log("A" myArr);


// const myHeros = ["babar Azam", "Shaheen", "naseem", "rizwan"]
// const dcHeros = ["babar", "Gulzar", "Ali", "Yahoobaba"]

// myHeros.push(dcHeros);
// console.log(myHeros);

// const allHeros =  myHeros.concat(dcHeros)
// console.log(allHeros);

// used spred operators
// const all_New_Heros = [...dcHeros, ...dcHeros]
// console.log(all_New_Heros);

// flat methods

// const anotherArray = [1, 2, 3, [4, 5, 6,], 7, [8, 9, 10]]
// const new_real_Array = anotherArray.flat(Infinity)
// console.log(new_real_Array);

// console.log(Array.isArray("Gulzar khan"));
// console.log(Array.from("Gulzar khan"));


// const score1 = 1000;
// const score2 = 2000;
// const score3 = 3000;
// console.log(Array.of(score1, score2,score3));




// // Object in javascript
//  const mySym = Symbol("mykey1")

// const jsUser = {
//     name: "Gulzar khan",
//     age: 23,
//     Email: "@gmail.com",
//     Address: "kohat",
//     LastLoggedIn: ["monday","Tuesday","Friday"],
//     [mySym]: "mykey1"


// }


// console.log(jsUser.Address);
// console.log(jsUser.Email);
// console.log(jsUser.LastLoggedIn[2]);
// console.log(jsUser[mySym]);

// jsUser.Email = "gokz21301@gmail.com"
// console.log(jsUser.Email);


// Object.freeze(jsUser)
// jsUser.Address = "peshawar"
// console.log(jsUser.Address);


// jsUser.greetingOne = function () {
//     console.log("Hello world");
    
// }


// jsUser.greetingTwo = function () {
//     console.log(`hello user ${this.name}`);
    
// }

// console.log(jsUser.greetingOne());
// console.log(jsUser.greetingTwo());


// var name = document.getElementById("heading-One").innerHTML = "<h1>My first value change in java script</h1>"

// console.log(name);

// // const objectUser = new Object()
// const object = {}


// object.id = "12abc",
// object.name = "Gulzar"
// LastLoggedIn = false
// console.log(object);


// const regularUser = {
//     Email: "@gul.com",
//     fullName: {
//         userFull: {
//             firstname: "Gulzar ",
//             LastName: "khan"
//         }
//     } 
// }

// console.log(regularUser.fullName);

// Merge the objects

// const object1 = {1: "a", 2: "b" }
// const object2 = {3: "c", 4: "d" }

// // const object3 = Object.assign(object1, object2);
// const object3 = (...object1, ...object2);
// console.log(object3);

// console.log(object3);


// const user = [
//     {
//         id: "@adda",
//         name: "Gulzar khan"
//     },
//     {
//         id: "@adda",
//         name: "Gulzar khan"
//     },
//     {
//         id: "@adda",
//         name: "Gulzar khan"
//     },
//     {
//         id: "@adda",
//         name: "Gulzar khan"
//     },
//     {
//         id: "@adda",
//         name: "Gulzar khan"
//     }
// ]


// user[1].id;


// object de_structure

// const course = {
//     userName: "khan",
//     price: "900",
//     courseInstructor: "Gulzar"

// }
// // course.courseInstructor;
// const {courseInstructor: Instructor} = course
//  console.log(Instructor);
 
//  console.log( course.courseInstructor);
 
 

// Function 
// console.log("g");
// console.log("u");
// console.log("l");
// console.log("z");
// console.log("a");
// console.log("r");

// function sayMyName() {
// console.log("gulzar");
// console.log("u");
// console.log("l");
// console.log("z");
// console.log("a");
// console.log("r");

// }
// sayMyName();
// sayMyName();
// sayMyName();


// function addTwoNumber(Number1, Number2){
//     console.log(Number1 + Number2);
    
// }
 
//  const result =  addTwoNumber(3, 5);
//  console.log(result); why it is undefined
 



// function addTwoNumber(Number1, Number2){

//         // let result = Number1 + Number2;
//         // return result; cannot write any thing after return bcz it is unreachable code
    
// }
 
//  const result =  addTwoNumber(3, 5)
// console.log(result);



//  function loginUserMessage(username = "KHan"){
//     if(!username){
//         console.log("please Enter user name first");
//         return
//     }
//     return `${username} just logged in`
//  }
// console.log(loginUserMessage("gul")); 


// function calculateCardPrice(num1) {
//  return num1;
// }

// console.log(calculateCardPrice(5));


// function calculateCardPrice(val1, val2, ...num1) {  rest operators ...
//  return num1;
// }

// console.log(calculateCardPrice(5, 3, 5));

// const user = {
//     username: "gulzar",
//     price: 200
// }



// function handleObject(anyobject){
//     console.log(`The user name is ${anyobject.username} and prices is ${anyobject.price}`);
    
// }

// handleObject(user);

// // return array
//  const myNewArray = [34, 56, 78, 89, 56, 45]

//  function returnSecondNumber(getArray) {
//     return getArray[1]
//  }

// console.log(returnSecondNumber(myNewArray));
 

// scope of function
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(i);

// scoping level

// function one(){
//     const username = "gulzar"

    
//     function two(){
//         const website = "youtube"
//         console.log(username);

//         console.log(website);
//     }
    
//     two()
//     // console.log(username);
    
// }
// one()
//  scope level
// if (true) {
//     const username = "gulzar"
//     if (username === "gulzar") {
//         const website = "youtube"
//         console.log(username + " " + " " + website);
//     }
//     // console.log(website);
    
    
// }
// // console.log(username);




//  console.log(addone(4));
 
// function addone(num){
//     return num + 1
// }


// console.log(addtwo());// it cannot acess befor intilization

// const  addtwo = function(num){
//     return addtwo + 2
// // }
// console.log(addtwo(9));


// This key word and Arrow function


// const user = {
//     userName: "Gulzar",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.userName} welcome to my website`);
//         // console.log(this);
        

//     }
// }
 
// user.welcomeMessage();
// this.userName = "gul"
// console.log(this.userName);

// console.log(this);


// function gul(){
//     let userName = "gulzar";
//     console.log(this.userName);
    
// }
// gul();

// const gul = function() {
//     let userName = "gulzar";
//     console.log(this.userName);
    
// }
// gul();

// const gul = () => {
//     let userName = "gulzar";
//     // console.log(this.userName);
//     console.log(this);
    
// }
// gul();

// const addTwoNumber = (num1, num2) => {
//     return num1 + num2;

// }
// console.log(addTwoNumber(5, 7));

// const addTwoNumber = (num1, num2) =>  num1 + num2;


// // const addTwoNumber = (num1, num2) =>  (num1 + num2);
// const addTwoNumber = (num1, num2) =>  ({userName: "gulzzar"});


// console.log(addTwoNumber(5, 10));

// immediately invoked function expersion IIFE

// (function gul (){  it is called name df
//     console.log("gulzar");
    
    
    
// })();

// ((username) => {
//     console.log(`Connected ${username}`);
    
// })("DBMS successfully")


//control flow in javaScript

// if(2 === "2"){
//     //== it check only value but === it check data type as well 
//     console.log("Executed");
    
// }

// switch statments

// const months = 3;
// // const months = +prompt("Enter month names please");

// switch(months){
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("August");
//         break;

//         default:
//             console.log("Enter invaled value");
//             break;
            
        
// }


// Nullish coalescing Operators (??)

// var val1;
// val1 =  5 ?? 10;
// //  val1 = null ?? 10;
// //  val1 = undefined ?? 20;


//  console.log(val1);

// loop itrations

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element === 3){
//         console.log("3 is the odd number in the list");
        
//     }

//     console.log(element);
    
    
// // }
//  for (let i = 2; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 2; j <= 10; j++) {
//         // console.log(`Inner loops here ${i} and ${j}`);
//         console.log(`The table ${i} * ${j} = ${i*j}`);
        
        
        
//     }
    
    
//  }

// loop in which assess the array elements

// const array = ["gulzar", "amin", "wajid", "roman"];
// // console.table(array);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.table(element);
    
// }


// // break and continue 
// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if(element === 5){
//         console.log("dedected");
//         // break; it break here not printing more elements
//         // continue;it continue untill the end
//         // that is the key difference between them
        
//     }
//     console.log(element);
    
    
// }


// while and do while loops

// let index = 0;

// while (index <= 10) {
//     console.log(`The value of index ${index}`);
//     index = index + 2;
    
    
// }

// const myArray = ["Fakhar", "Babar", "Shaheen ", "Naseem"];

// let arr = 0;
// while (arr < myArray.length) {
//     console.log(`The Name of our hero is =  ${myArray[arr]}`);
//     arr = arr + 1;
    
    
// }
// do while loop
  

// let score = 1;
// do {
//     console.log(`Your scores is ${score}`);
//     score = score + 1;
    
// } while (score <= 10);


// for of loop

// const arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//     console.log(`the value of i is ${i}`)
    
    
// }

// for string 

// const greeting = ["Assalam o alikom"];
// for (const greet  of greeting) {
//     console.log(` ${greet}`);
    
    
// }

// Map 

// const map = new Map()
//     map.set('Pak', "pakistan")
//     map.set('ind', "India")
//     map.set('Sar', "Sarilanka")
//     map.set('Bang', "Bangladish")

//     // console.log(map);

//     for (const [key, value] of map) {   // array destructuring 
//         console.log(key, ':-', value);
        
        
//     }
    
// const myObject = {
//     cpp: "c++",
//     js: "javascript",
//     css: "cascading style sheet"
// }
// // for (const key of myObject) {
// //     console.log(myObject);
    
    
// // }
// for (const key in myObject) {
//     console.log(`${key} shortcut of ${myObject[key]}`);
    
    
// }
// forEach methods

// const programming = ["java", "python","javascript", "cpp", "html"];
// programming.forEach( function(val) {
//     console.log(val);
    
// })
// ARROW FUNCTION

// programming.forEach( (items) =>{
//     console.log(items);
    
// })

//  function printingMe (items){
//     console.log(items);
    
// }
// programming.forEach(printingMe)

// programming.forEach( (items, index, arr) => {
//     console.table(items, index, arr);
    
// })
// const myObject = [
//     {
//         languageName: "javaScript", 
//         languageFileName: "js"
//     },
//     {
//         languageName: "java", 
//         languageFileName: "java"
//     },
//     {
//         languageName: "c++", 
//         languageFileName: "cpp"
//     }
// ]
// myObject.forEach( (items) =>  {
//     console.log(items.languageName);
    
// })

// forEach

// const conding = ["java","cpp","javascript","html","css"];

// const values = conding.forEach( (item) => { // return no value => undefined
//     // console.log(item);
//     return item
    

// })
// console.log(values);

//filter Methods

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newNum = myNum.filter( (myNum) => myNum > 4);
// const newNum = myNum.filter( (myNum) =>{
//    return myNum > 4     //it return empty array when you not used return key words
// });

// console.log(newNum);


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubleNum = num.map( (num) => num * 2)
// console.log(doubleNum);


// // chain methods 
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNum
//                 .map( (val) => val * 10)
//                 .map( (val) => val + 1)
//                 .filter( (val) => val >= 50)
                
                
//                 console.log(newNum);
// reduced methods

// const shopingCard = [1, 2, 3, 4];

// const Total = shopingCard.reduce( function (acc, currval){
//     console.log(`acc ${acc} and currval ${currval}`);
    
//     return acc + currval;
// }, 0
// );
// arrow function

// const Total = shopingCard.reduce( (acc, currval) => acc + currval , 0)
// console.log(Total);

const shopingCard = [
    {
        itemName: "js course",
        price:  9909
    },
    {
        itemName: "py course",
        price:  909
    },
    {
        itemName: "php course",
        price:  99
    },
    {
        itemName: "css course",
        price:  1909
    },
]

const Total = shopingCard.reduce( (acc, item) => acc + item.price ,0);
console.log(Total);
