const {
    saveObjectToArrayInFile,
    getAllDataFromArrayFromFile,
    editObjectFromArrayFromFile,
    deleteObjectFromArrayFromFile,
} = require("./file-helper.js");

const main = async () => {
    const filePath = "./my-data.json";

    // await saveObjectToArrayInFile({ name: "XYZ", city: "Delhi", car: "BMW" }, filePath);
    // const resp = await getAllDataFromArrayFromFile(filePath);
    // console.log("all data --> ", resp);

    await saveObjectToArrayInFile({ name: "Anuj", city: "Noida", car: "mercedes" }, filePath);
    const resp2 = await getAllDataFromArrayFromFile(filePath);
    console.log("all data --> ", resp2);

    await editObjectFromArrayFromFile({ city: "Pune" }, resp2[0].id, filePath);
    const resp3 = await getAllDataFromArrayFromFile(filePath);
    console.log("all data --> ", resp3);

    // saveObjectToArrayInFile({ name: "Mohan", city: "Jaipur" }, filePath);
    // const resp4 = await getAllDataFromArrayFromFile(filePath);
    // console.log("all data --> ", resp4);

    // deleteObjectFromArrayFromFile(1, filePath);
    // const resp5 = await getAllDataFromArrayFromFile(filePath);
    // console.log("all data --> ", resp5);
};

main();