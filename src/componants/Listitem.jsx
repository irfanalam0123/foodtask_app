 import Arrangeitem from "./Arrangeitem";
 
 const Listitem =({fooditem}) =>{
   // const fooditem = ["dal", "ghovi", "tamater", "sabjo", "chawal"];
  return (
    <ul className="list-group">
      {fooditem.map((items) => (
        <Arrangeitem
         key={items}fooditem={items}
         handleButton={()=> console.log(`${items} is bought`)}
        
        ></Arrangeitem>


      ))}
    </ul>
  );
 }
 export default Listitem;