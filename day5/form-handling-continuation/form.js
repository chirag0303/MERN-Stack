const title = document.getElementById("greetings")
const handleUserName = (e) => {
    // console.log("typed");
    // console.log("--------");
    // console.log(e);
    // console.log(e.target.value);
    title.innerText = `Hello ${e.target.value}`
};

const handleFormSubmit = (e) => {
    e.preventDefault();

    // const username = e.target[0];
    // const email = e.target[1];
    // const password = e.target[2];
    
    const username = e.target.usernameTemp.value;
    const email = e.target.baseEmail.value;
    const password = e.target.abcdPassword.value;


    // console.log(username);
    // console.log(email);
    // console.log(password);

    if(!email.endsWith("@lpu.in")){
        alert("Please use your LPU email id");
    } else {
        // call the api
        // send the data
    }

};