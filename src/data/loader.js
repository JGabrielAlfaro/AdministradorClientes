
import { obtenerClientes } from "./clientes"


export function loader() {
   const clientes = obtenerClientes()
   //  console.log(clientes)
   return clientes;
  
}