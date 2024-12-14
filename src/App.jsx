import "./App.css";
import"bootstrap/dist/css/bootstrap.min.css";
import Listitem from "./componants/Listitem";
import Container from "./componants/Container";
import Heading from "./componants/Heading";
import Input from "./componants/Input";
import Emptymessage from "./componants/Emptymessage";
import { useState } from "react";

function App() {

  
  //selet fooditem = ["dal", "ghovi", "tamater", "sabjo", "chawal"];
  //let [textToShow, setTextState] = useState();
  let [fooditem, setFoodItem] = useState([]);

  // console.log(`current value ${textToShow}`);

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newfoodItem=event.target.value;
      event.target.value="";
      let newItem=[...fooditem,newfoodItem];
      setFoodItem(newItem);
      //console.log('food item is' + newfoodItem);

    }
    // console.log(event);
    // setTextState = event.target.value;
  };

  return (
    <>
      <Container className="container">
        <Heading></Heading>
        <Input handleOnKeyDown={onKeyDown}></Input>
        {/* <p>{textToShow}</p> */}
        <Emptymessage fooditem={fooditem}></Emptymessage>

        <Listitem fooditem={fooditem}></Listitem>
      </Container>
    </>
  );
}
export default App;