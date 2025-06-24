// const element = document.getElementById("root");

// const ul = document.createElement("ul");

// const item1 = document.createElement("li");
// const item2 = document.createElement("li");
// item1.innerText = "item1";
// item2.innerText = "item2";

// ul.appendChild(item1);
// ul.appendChild(item2);

// element.appendChild(ul);
//-------------------------------

// const item1 = React.createElement('li',{},'Item 1');
// const item2 = React.createElement('li',{},'Item 2');
// console.log(item1);
// const list = React.createElement("ul",{},[item1,item2]);

// const Elem = document.getElementById('parent');
// const reactRoot = ReactDOM.createRoot(Elem);

// reactRoot.render(list);
//-----------------------------


const list = (  // you can code this without '(' also.
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
);

const Elem = document.getElementById('parent');
const reactRoot = ReactDOM.createRoot(Elem);

reactRoot.render(list);
