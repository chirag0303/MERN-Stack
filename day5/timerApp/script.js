const timerText = document.getElementById("timer-text");
let timeSec = 0;
let timerFunc = () => {
    timeSec++;
    console.log(timeSec);
    
    const sec = timeSec%60;
    let min = Math.floor(timeSec/60);
    min = min%60;
    let hrs = Math.floor(timeSec/3600);
    timerText.innerHTML= `${hrs<10?'0'+hrs:hrs}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`;
}
let timer = setInterval(timerFunc,1000);

const handleReset = () => {
    timeSec = 0;
    timerText.innerHTML = "00:00:00";
};
const handleStop = () => {
    clearInterval(timer);
}
const handleResume = () => {
    timer = setInterval(timerFunc,1000);
}
const handleLap = () => {
    const para = document.createElement("p");
    para.innerText = timerText.innerText;
    document.getElementById('root').appendChild(para);
}