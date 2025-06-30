import { useEffect, useState } from "react";

const App = () => {
  const [timeInSec, setTime] = useState(0);

  //this code will run again and again as state changes after each render

  useEffect(() => {
    setInterval(()=>{
      setTime((prev)=> {
        return prev+1;
      });
    },1000);
  },[]);

  return (
    <div>
      <h1>00:00:{timeInSec}</h1>
    </div>
  );
};

export default App;