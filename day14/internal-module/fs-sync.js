const fs = require("node:fs");

const resp1 = fs.readFileSync('./temp.txt','utf-8');
const resp2 = fs.readFileSync('./student.txt','utf-8');

console.log(resp1);
console.log(resp2);