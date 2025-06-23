const req = fetch("https://dummyjson.com/products");
console.log("Request: ",req);
console.log("Request: ",req);

const successCb = (response) => {
    console.log("Response", response);
    const pr = response.json(); // convert json data to js and again rerturns a promise
    pr.then((data)=>{
        renderUI(data);
        // console.log("Data",data);
    });
};

const errorCb = (err) => {
    console.log("Unable to get Products", err.message);

};
req.then(successCb).catch(errorCb);

const parentElem = document.getElementById("root");
const renderUI = (data) => {
    const { products } = data;
    products.forEach((element) =>{
    
    })
};