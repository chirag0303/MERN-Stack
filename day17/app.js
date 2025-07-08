const  dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");

const {apiRouter} = require("./api/v1/routes");

const app = express();

app.use(express.json()); // this line wil read the body of the req sent from the client in json format


app.get("/",(req,res)=>{
    res.status(200);
    res.json({
        isSuccess: true,
        message: "Server is running",
        data: {},
    });
});

app.use("/api/v1",apiRouter);

app.listen(8080,()=>{
    console.log("----Server is running----");
});