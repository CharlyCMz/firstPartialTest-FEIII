import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  //Declare the initial state for the items on the buying car
  const [initialItems, currentItems] = useState(0);

  //Declare a function to modify the car state adding 1 item for each run
  const carCounter = () => {
    currentItems(initialItems+1);
  };

  return (
    <div className="App">
      <Cabecera currentItems={initialItems}/> {/*Send the variable value to "Cabecera" to be showed */}
      <Listado carCounter={carCounter}/> {/*Send the function so the children can inherit the property to modify the state*/}
    </div>
  );
}

export default App;
