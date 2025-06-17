// Anonymous Func
// const printBill = function (txt){
//     console.log("Rs. ",txt);
// };

// Arrow func assignment
// const printBill = (txt) => {
//     console.log("------------------")
//     console.log("Rs. ", txt);
//     console.log("------------------")
// };

const billForFood = (price) => {
    return price * 1.05;
};

const billForClothes = (price) => {
  return price * 1.12;
};

const billForDrinks = (price) => {
  return price * 1.2;
};

const printBillFood = (txt) => {
    console.log("------------------")
    console.log("Your Bill for food is ", txt);
    console.log("------------------")
};
const printBillFoodDrinks = (txt) => {
    console.log("------------------")
    console.log("Your Bill for food & Drinks is", txt);
    console.log("------------------")
};
const printBillFoAll = (txt) => {
    console.log("------------------")
    console.log("Your Bill for food, Drinks & Clothes is", txt);
    console.log("------------------")
};

 // This Func is a higher Order Function
const finalBill = (foodPrice, clothesPrice, drinksPrice, cb) => {
    let totalAmount = billForFood(foodPrice) + billForClothes(clothesPrice) + billForDrinks(drinksPrice);
    cb(totalAmount);
};

finalBill(100, 200, 300, printBillFoAll); // printBillForAll is a CallBack Function
finalBill(100, 200, 0, printBillFoodDrinks);
finalBill(100, 0, 0, printBillFood);