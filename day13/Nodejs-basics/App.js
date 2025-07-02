const temp  = require("./textFormater.js");
const paraHelper = require("./paraFomatter.js");
const resp = temp.getCamelCase("Hello world in node js");
console.log(resp);

const resp2 = paraHelper.formatParagraph(
    `The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread. These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.`
);
console.log(resp2);


// console.log("Hello from NodeJs");
// const a=20;
// const b=10;

// console.log("a+b=",a+b);