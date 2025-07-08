const express = require("express");
const {createProductController} = require("./controller.js");

const productRouter = express.Router();

productRouter.get("/",(req,res)=>{
    res.json({
        isSuccess: true,
        message: "Product List fetched",
        data: {},
    });
});
productRouter.post("/",createProductController);
module.exports = {productRouter};