import { useState } from "react";

const App = () => {
  
  const [searchText, setSearchText] = useState(() => {
    return localStorage.getItem("val");
  });

  console.log(searchText);

  const handleSearch = (e) => {
    localStorage.setItem("val",e.target.value);
    setSearchText(e.target.value);
  };
 
  return (
    <div> 
      <input type="text" value={searchText} onChange={handleSearch} />
      <h2>{searchText}</h2>
    </div>
  );
};
export default App;
