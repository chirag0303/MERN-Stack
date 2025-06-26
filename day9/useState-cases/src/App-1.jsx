import { useState } from "react";

const App = () => {
  // let searchText = "Arun";
  const [monitor, remote] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;
    remote(value);
    console.log(monitor);
  }
  return (
    <div> 
      <input type="text" onKeyUp={handleSearch} />
      <h1>{monitor}</h1>
    </div>
  );
};
export default App;
