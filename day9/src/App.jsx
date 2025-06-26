import { useState } from "react";

const App = () => {
  const [arr,setArr] = useState(["kiwi","banana"]);
  const handleFruit = () => {
    // const temp = [...arr];
    // temp.push("Mango");
    // console.log(arr);
    // setArr(temp);
    setArr((prev)=>{
      const temp = [...prev];
      temp.push("Mango");
      console.log("Temp: ",temp);
      return temp;
    })
  }

  return (
    <div>
      <ul>
        {arr.map((elem)=>{    //map supports return
          return <li>{elem}</li>;
        })}
      </ul>
      <button onClick={handleFruit}>Add Mango</button>
    </div>
  );
};

export default App;
