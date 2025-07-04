const fsPromises = require("node:fs/promises");

const main = async () => {
    console.log("Start-------------------")
    try {
        const resp1 = await fsPromises.readFile('./temp.txt','utf-8');
        console.log(resp1);

    } catch(err) {
        console.log("Error: ",err.message);
    }

    console.log("MID-------------------")

    try {
        const resp2 = await fsPromises.readFile('./student.txt','utf-8');
        console.log(resp2);

    } catch(err) {
        console.log("Error: ",err.message);
    }
    console.log("END-------------------")
}
main();
