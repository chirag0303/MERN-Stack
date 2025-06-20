const newDate = null;
const handleDate = (e) =>{
    newDate = new Date(e.target.value);
    console.log("Date ",newDate);
    const targetMilliSeconds = newDate.getTIme();
    console.log("targetMilliSeconds: ", targetMilliSeconds);
    const currentMilliSeconds = Date.now();
    console.log("currentMilliSeconds: ", currentMilliSeconds);
    const diff = (targetMilliSeconds - currentMilliSeconds) / 1000;
    console.log("Diff: ", diff);

};

