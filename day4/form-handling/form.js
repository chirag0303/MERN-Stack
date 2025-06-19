const title = document.getElementById("greetings")
const handleUserName = (e) => {
    console.log("typed");
    console.log("--------");
    console.log(e);
    console.log(e.target.value);
    title.innerText = `${e.target.value}`
}