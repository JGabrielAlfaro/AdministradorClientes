
import { agrearClientes } from "./clientes";
import { redirect } from "react-router-dom"

export async function action({request}){

    const formData = await request.formData();

    const datos = Object.fromEntries(formData);
    const errores = [];
    const email = formData.get('email');
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\\\"(\\[\\]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\\.[!#-'*+/-9=?A-Z^-~-]+)*|\\[[\\t -Z^-~]*])");
    console.log(email);
    if (!regex.test(email)){
        errores.push("El email no es valido");
    }
    //Validacion.
   
    if (Object.values(datos).includes("")){
        errores.push("Todos los campos son obligatorios")
    }
    // console.log(errores)

    if(Object.keys(errores).length){
        return  errores;
    }
    
    await agrearClientes(datos) // ponemos una await para que espero lo datos.

    return redirect("/")
}