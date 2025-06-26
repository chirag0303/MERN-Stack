import { useState } from "react";

const App = () => {
  // let searchText = "Arun";
  const [monitor, remote] = useState(0);
  console.log(monitor);

  const handleClick = () => {
    remote(monitor + 1);
    remote(monitor + 2);// react will perform this statement as this comes in last
    console.log(monitor);
  }
  return (
    <div> 
      <button onClick={handleClick}>Click Me</button>
      <h2>{monitor}</h2>
    </div>
  );
};
export default App;
