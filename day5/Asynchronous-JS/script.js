console.log("Start");

const timeDelayInMS = 10000;
const callbackFunc = () => {
    console.log("Wohoo!");
}
setTimeout(callbackFunc, timeDelayInMS);
console.log("End");