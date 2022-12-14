import FaceDatabase from "./Facedatabase";
import { useState } from "react";
const Card = (props) => {
    const [array, setArray] = useState(FaceDatabase);
    const [send, setSend] = useState(false);
    const [checked, setChecked] = useState(false);
    const [details, setDetails] = useState(false)
    const handleClick = () => {
      setSend(true);
      setChecked(true)
    };
    const handleOnClick = () => {
      setSend(false);
      setChecked(false)
    };
    const handleDetails = () => {
      setDetails(true)
  
    };
    const handleOnDetails = () => {
      setDetails(false)
    }
return(
   
    <div className="content">
         <img
          className="img"
          src={props.img}
          alt=""
        />
        <span className="name">{props.name}</span>
        <div>
          {" "}
          <button onClick={handleDetails} className="details">Детали</button>
        </div>
        <div>
          <span className="price">{props.price}</span>
        </div>
        <hr className="hr" />
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        <div className="basketMom">
          <button disabled={checked} onClick={handleClick} className={send ? "basket2" : "basket"}>
            {send ? "Уже в корзине" : "Добавить в корзину"}
          </button>
          {send && (
            <button className="deleteBut" onClick={handleOnClick}>
              Удалить из карзины
            </button>
          )}
        </div>
        {details && <div className="block">
       <div className="buttonX"> <button onClick={handleOnDetails} className="x">x</button> </div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti illo illum natus dignissimos .
       
      </div>}
    </div>
)
}
export default Card;