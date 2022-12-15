import React, { useState } from "react";
import FaceDatabase from "./Facedatabase";
import Card from "./Card";
const App = () => {
  const [array, setArray] = useState(FaceDatabase);
  const handleValue = (e) => {
  setArray(FaceDatabase.filter((item) => {
    return item.name.toLowerCase().trim().indexOf(e.target.value.toLowerCase().trim()) != -1 && item 
  }))
  };

  return (
    <div className="container">
      <div className="Form">
   <input className="input" onChange={handleValue}/>
      </div>
      <div className="flexBox">
      {array.map((item) => { 
         return <Card img={item.img} name={item.name} price={item.price} />;
      })}
      </div>
    </div>
  );
};
export default App;
