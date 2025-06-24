const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

// const Card1 = (
//     <div className="card">
//         <h1>Invitation</h1>
//         <p>Description</p>
//     </div>
// );
// const Card2 = (
//     <div className="card">
//         <h1>Warning</h1>
//         <p>Description</p>
//     </div>
// );
// const Card3 = (
//     <div className="card">
//         <h1>Notification</h1>
//         <p>Description</p>
//     </div>
// );
// const Container = <div> {Card1} {Card2} {Card3} </div>

// reactRoot.render(Container);
//----------------------------------------

// const Card = (title) => {  // This is a react component
//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       <p>Description</p>
//     </div>
//   );
// };

// const Container = (
//   <div>    
//     {Card("Hello")} {Card("Notice..")} {Card("Warning..")}
//   </div>
// );

// reactRoot.render(Container);
//--------------------------------------

const Card = (obj) => {  // This is a react component
  return (
    <div className="card">
      <h1>{obj.title}</h1>
      <p>Description</p>
    </div>
  );
};

const Container = (
  <div>    
    {Card({title:"Hello"})} 
    <Card title="Notice"></Card>
    {Card({title:"Warning.."})}
  </div>
);
// line 56 and 57 are same 
reactRoot.render(Container);


