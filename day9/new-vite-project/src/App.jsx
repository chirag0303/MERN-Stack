import { useState } from "react";


const App = () => {

  const[users, setUsers] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const username = e.target.name.value;
    const city = e.target.city.value;

    setUsers((prev)=>{
      const temp = [...prev];
      temp.push({username, city});
      return temp;
    });
  };


  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Name" name="name"/>
        <input type="text" placeholder="City" name="city"/>
        <button type="Submit">Submit</button>
      </form>
      <div>
        {
          users.map((elem)=>{
            return (
              <div>
                <h4>{elem.username}</h4>
                <p>{elem.city}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default App;