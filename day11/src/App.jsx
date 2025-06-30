import { useEffect, useState } from "react";

const App = () => {
  // const getData = () => {
  //   const response = fetch("https://dummyjson.com/users");
  //   response.then((resp)=>{
  //     const pr2 = resp.json();
  //     return pr2;
  //   })
  //   .catch((err) => {
  //     console.log("error: ", err);
  //   })
  //   .then((data)=>{
  //     console.log("data", data);
  //   })

  // async await is just a wrapper on then() and catch()

  const [usersList,setUsersList] = useState([]);

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log("data: ",data);
    const{ users } = data;
    setUsersList(users);
  }
  



  console.log("getData! called");

  useEffect(()=>{
    getData();
  },[]);

  return(
    <div>
      <h1>Hello</h1>
      {usersList.map((elem)=>{
        return(
          <div>
            <h3>{elem.firstName}</h3>
          </div>
        )
      })}
    </div>
  )
};

export default App;