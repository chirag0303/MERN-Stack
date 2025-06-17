// Objects stores key value pairs

// const cse018 = {
//     name: "XYZ",
//     address: "UP",
//     bloodGroup: "O-",
// };
// const cse75 = {
//     name: "ABC",
//     address: "RJ",
//     bloodGroup: "O+",
// };
//
// console.log(cse018,cse75);

// const cse018 = {
//     name: "XYZ", // it is property as it's value is not a function
//     address: "UP",
//     bloodGroup: "O-",
//     getInfo: () => {
//         console.log("Student data")
//     },
// };

// console.log(cse018);

// cse018.bloodGroup = "A-"; // updating property
// cse018.college = "LPU"; // adding an new key-value pair
// delete cse018.address; // deleting a key-value

// console.log(cse018);

// const person = {
//     name: "ABC",
//     height: 1.5, //metera
//     weight: 65, //kg
//     college: "LPU",
//     getBMI: function () {
//         const bmi = this.weight / this.height ** 2; // 'this' only works when 'function' keyword is used
//         console.log(`BMI of ${this.name} is ${bmi}`); // 'this' doesn't work with arrow function
//         if (bmi < 20) {
//             console.log("You are underweight");
//         } else if (bmi < 25) {
//             console.log("You are fit");
//         } else if (bmi < 30) {
//             console.log("You are overweight");
//         } else {
//             console.log("you are obese");
//         }
//     },
// };
// person.getBMI();

// person.weight = 80;

// person.getBMI();
// const allKeys = Object.keys(person);
// console.log("allKeys: ", allKeys);
// const allValues = Object.values(person);
// console.log("allValues: ", allValues);
// const allEntries = Object.entries(person);
// console.log("allEntries: ", allEntries);


// ------------Dynamic Access-----------
// const person = {
//     name: "ABC",
//     height: 1.5, //metera
//     weight: 65, //kg
//     college: "LPU",
// };

// const whichKey = prompt("Which key? ");

// console.log(whichKey,":", person[whichKey]);


const person1 = {
    name: "ABC",
    height: 1.5, //metera
    weight: 65, //kg
    college: "LPU",
};
//const person2 = person1; // shallow copy
// ----- De-structuring--------

const { name, college } = person1; // name will the 'name' of person same for 'college'
const person2 = {...person1}; // ... is a spread operator helps in making copy
console.log(person2);
console.log(name,college);

