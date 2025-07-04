const fs = require("node:fs");

fs.readFile('./temp.txt','utf-8',(err, data) => {
    if(err){
        console.log("Error: ", err.message);
        return;
    } 
    console.log(data);
});
fs.readFile('./student.txt','utf-8',(err, data) => {
    if(err){
        console.log("Error: ", err.message);
        return;
    } 
    console.log(data);
});

