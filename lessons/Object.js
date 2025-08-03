//define an object with properties
let teoInfo = {
    name: "Teo", //property with string value
    age: 25,
    gender: "male",
    // sayHello: function(){
    //     console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    // }, //method to greet,

    // nestedObject: {
    //     hobby: "coding",
    //     favoriteLanguage: "JavaScript"
    // }, //nested object
}

console.log(`Name: ${teoInfo.name}, Age: ${teoInfo.age}`);

//Destructuring the object
const {age, name} = teoInfo; //empty destructuring, no properties extracted

//update the age property
teoInfo.age = 26;

//delete
delete teoInfo.age;
teoInfo.age = 29; 
console.log(teoInfo);


//shallow copy of the object
let tunInfo = {...teoInfo}; //using spread operator to copy properties\
//only works with 1 level deep objects but not nested objects

//shallow copy - handles nested objects
let tunInfo2 = JSON.parse(JSON.stringify(teoInfo)); //deep copy using JSON methods



