import { redirect } from "react-router-dom";
import { eliminarCliente } from "./clientes";


export async function action ({params}){
    await eliminarCliente(params.clienteId);
    return redirect("/")
}