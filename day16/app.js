const dotEnv = require("dotenv");
dotEnv.config();

const express = require("express");

require("./config/db");

const { Product } = require("./models/product_schema.js");

const app = express();

app.use(express.json()); // this will convey to express-js to read the body of the request in the json format

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    isSuccess: true,
    message: "Server is running...",
    data: {},
  });
});

app.post("/api/v1/products", async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await Product.create(data);
    res.status(201);
    res.json({
      isSuccess: true,
      message: "Product created!",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    if (err.name === "ValidationError" || err.code == "11000") {
      res.status(400); // client error
      console.log("---  error occurred in post products ----");
      console.log(err.message);
      res.json({
        isSuccess: false,
        message: err.message,
        data: {},
      });
    } else {
      res.status(500); // server error
      res.json({
        isSuccess: false,
        message: "Internal Server Error",
        data: {
          errMessage: err.message,
        },
      });
    }
  }
});

app.get("/api/v1/products", async (req,res)=>{
    try {
        const allProducts = await Product.find();
        res.status(200);
        res.json({
            isSuccess: true,
            message: "products Fetched",
            data: {
                products: allProducts,
            },
        });
    } catch (err){
        console.log("---  error in get products ----");
        console.log(err.message);

        res.status(500);
        res.json({
            isSuccess: false,
            message: "Internal Server error",
            data: {
                errMessage: err.message,
            },
        });
    }
});

app.delete("/api/v1/products/:productId",async (req,res)=>{

    try {
        const {productId} = req.params;
        const deletedId = await Product.findByIdAndDelete(productId);

        if (deletedId == undefined){
            res.status(400);
            res.json({
                isSuccess: false,
                message: "Can't find Item",
                data: {},
            });
        }

        res.status(204);
        res.json({
            isSuccess: true,
            message: "Product deleted",
            data: {
                product: deletedId,
            },
        });
    } catch (err) {
        console.log("---  error in delete products ----");
        console.log(err.message);

        res.status(500);
        res.json({
            isSuccess: false,
            message: "Internal Server error",
            data: {
                errMessage: err.message,
            },
        });
    }
})

app.listen(2900, () => {
  console.log("------ Server started ------");
});
