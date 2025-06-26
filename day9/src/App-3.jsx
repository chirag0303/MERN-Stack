import { useState } from "react";

const App = () => {
  
  const [monitor, remote] = useState(()=>{
    const val = localStorage.getItem("counter-value"); // local storage always stores data in string.
    if (val) return parseInt(val);
    return 0;
  });
  console.log(monitor);

  const handleClick = () => {
    remote((prev)=>{     
      const newVal = prev+1;
      localStorage.setItem("counter-value",newVal);
      return newVal;
    });
  }
  const handleDecrement = () => {
    remote((prev)=>{     
      const newVal = prev-1;
      localStorage.setItem("counter-value",newVal);
      return newVal;
    });
  }

  const handleReset = () => {
    remote(0);
    localStorage.setItem("counter-value",0);
    console.log(monitor)
  };
  return (
    <div> 
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h2>{monitor}</h2>
    </div>
  );
};
export default App;
