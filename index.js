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



 function loginUserMessage(username = "KHan"){
    if(!username){
        console.log("please Enter user name first");
        return
    }
    return `${username} just logged in`
 }
console.log(loginUserMessage("gul")); 












