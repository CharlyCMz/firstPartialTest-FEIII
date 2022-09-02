import React from 'react'
import data from "./data.json";
import Item from "./Item";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado(props) {
  return (
    <div className='container'>
      {/*JSON File was imported to be maped, when each child "Item" were generated takes the info as props*/}
      {/*Also the childs inherit the "carCounter" function so they can implement it*/}
      {data.map(item =>(<Item 
                                key={item.id}
                                nombre={item.producto.nombre} 
                                descripcion={item.producto.descripcion} 
                                stock={item.stock}
                                carCounter={props.carCounter}
                        />
                      )
                )
      }
    </div>
  )
}
