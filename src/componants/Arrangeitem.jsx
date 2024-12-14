
import style from "./Arrangeitem.module.css";

const Arrangeitem= ({fooditem})=>{


//  const handleButton = (fooditem,event)=>{
//   console.log(event)
//  console.log(`${fooditem} beings bought`);
//  };

  return (
    <li className={`${style["kgitem"]} list-group-item`}>
      {fooditem}
      <button
        className={`${style.button} btn btn-info`}
        //onClick={handleOnchange}
        
      > buy
      </button>
    </li>
  );
}

export default Arrangeitem;
