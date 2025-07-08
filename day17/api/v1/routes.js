const express = require("express");

const apiRouter = express.Router();

apiRouter.get("/",(req,res)=>{
    res.json({
        isSuccess: true,
        message: "Hello from router",
    });
});


apiRouter.get("/hello/user",(req,res)=>{
    res.json({
        isSuccess: true,
        message: "Hello from user",
    });
});

module.exports = {apiRouter};