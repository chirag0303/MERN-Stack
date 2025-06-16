// let juice = 50;
// let gstOnJuice = 0.1;
// let fries = 70;
// let gstOnFood = 0.05;


// console.log(juice + fries + juice*gstOnJuice+ fries*gstOnFood)
  // First way
//function calculateJuiceBillXYZ(juice,gstOnJuice){
//     let bill = juice + juice * gstOnJuice;
//     // console.log(juice + juice * gstOnJuice);
//     return bill;
// }

// Second WAY - functions assignment
// const calculateJuiceBill = function calculateJuiceBillXYZ(juice,gstOnJuice){
//     let bill = juice + juice * gstOnJuice;
//     // console.log(juice + juice * gstOnJuice);
//     return bill;
// }
// const bill = calculateJuiceBill(50,0.1);
// console.log(bill);

// calculateJuiceBill(110,0.02);
// calculateJuiceBill(60,0.2);

// Third Way


const printBill = function (name,amount){
    console.log("Your bill for :",name);
    console.log("Rs. ", amount);
    console.log("-----------------------")
}

const calculateBill = function (price,gst){
    console.log("....Calculating....");
    let amount = price + price*gst;
    return amount;
}

let res1 = calculateBill(100,0.1);
printBill("Juice", res1);

let res2 = calculateBill(60,0.01);
printBill("Fries", res2);