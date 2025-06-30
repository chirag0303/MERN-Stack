import { useRef } from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [timeInSec, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const intervalref = useRef(null);

  //this code will run again and again as state changes after each render

  useEffect(() => {

    intervalref.current =  setInterval(()=>{
      setTime((prev)=> {
        return prev+1;
      });
    },1000);
  },[]);

  const handlePause = () => {
    const intervalId = intervalref.current;
    clearInterval(intervalId); 
    setIsTimerRunning(false);
  };

  const handlePlay = () => {
    intervalref.current =  setInterval(()=>{
      setTime((prev)=> {
        return prev+1;
      });
    },1000);
    setIsTimerRunning(true);
  };

  return (
    <div>
      <h1>00:00:{timeInSec}</h1>
      { isTimerRunning ? <button onClick={handlePause}>Pause</button> :  <button onClick={handlePlay}>Play</button>}
    </div>
  );
};

export default App;