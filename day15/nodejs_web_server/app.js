const http = require("http");

const app = http.createServer((req,res)=> {
   console.log("--------------req receiveed-------");
   if (res.method === "GET"){
       const obj = {name:"XYZ", city: "Pune"};
       res.end(JSON.stringify(obj,null,4));
   }else {
    console.log(Object.keys(req));
    res.end("Work in Progress.....");
   }

    
})
app.listen(2700, ()=> {
    console.log("-------------Server is starting----------");
})