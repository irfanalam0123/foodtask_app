 
 import style from "./Input.module.css";
  const Input = ({ handleOnKeyDown}) => {
    // const handleInput=(event) =>{
    //   console.log(event.target.value);
    // }

    return (
      <div>
        <input
          type="text"
          placeholder="entre the data"
          className={style.iinput}
          //onChange={(event)=>handleInput(event)} jab componamt file me ho tab
          //onChange={handleInput}
          onKeyDown={handleOnKeyDown}
        />
      </div>
    );
  };
 export default Input;