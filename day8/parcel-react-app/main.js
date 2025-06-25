import  React  from "react";
import ReactDOM from "react-dom/client"

const domRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(domRoot);


const App = () => {
    console.log("Chirag Goyal")
    return (
        <div>
            <h1>Hello React!!</h1>
        </div>
    )
}

reactRoot.render(<App/>);
