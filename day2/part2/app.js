// const arr = ["tata","mahindra","suzuki", "hyundai"];
// console.log(arr);

// //array De-structuring
// const [a,b,c] = arr;
// console.log(b,c);

// const arr = ["tata", "mahindra", "suzuki", "hyundai"];

// arr[10] = "Honda"; //This will create holes on index 4 to 9
// arr.push("Honda")
// arr.pop();

// arr.shift();
// arr.unshift("kia");

// arr.splice(1,3,"kia","honda"); // deleting and inserting at the same time
// arr.splice(2,0,"byd")

// console.log(arr.indexOf("suzuki"));
// console.log(arr.indexOf("honda"));

// console.log(arr);

// const arr = [
//     { name: "Abhinav", city: "Delhi" },
//     { name: "Sumit", city: "Kanpur" },
//     { name: "Sumedh", city: "Mumbai" },
// ];
// console.log(arr.indexOf({name: "Sumit", city: "Delhi"}));
// console.log(arr.indexOf({name: "Sumit", city: "Kanpur"}));

// const arr = ["ab","xy","mn","ab","pq"];
// // arr.includes("ab") -> true

// const myFunc = (a,b) => {
//     console.log(a,b);
// }

// const elem = arr.find(myFunc); //this will work as a loop and myFunc will run 5 times.

const arr = [
    { name: "Abhinav", city: "Delhi", score: 89 },
    { name: "Sumit", city: "Kanpur", score: 22 },
    { name: "Sumedh", city: "Mumbai", score: 40 },
];

// const myFunc = (a) => {
//     if (a.name == "Sumedh") return true;
//     else return false;
// }
// console.log(arr.findIndex(myFunc));

const myFunc = (a) => {
    if (a.score < 25) {
        return { ...a, remark: "fail" };
    } else {
        return { ...a, remark: "pass" };
    }
};

const newArr = arr.map(myFunc); //creates a new array with one new key-pair i.e. remark
console.log("newArr", newArr);
