import { useNavigate, Form,useActionData } from "react-router-dom"

import Formulario from "../components/Formulario";
import Error from "../components/Error";

const NuevoCliente = () => {

  const navigate = useNavigate();
  const errores = useActionData()
  // console.log(errores);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Clientes</h1>
      <p className="mt-3"> Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
          <button 
            className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
            onClick={()=> navigate(-1)}
          
          >
            Volver
          </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
          {errores?.length && errores.map( (error,i) => <Error key={i}> {error} </Error> )}
          <Form
            method="post"
            noValidate
          >
              <Formulario/>
              <input
                type="submit"
                className="mt-5 w-full bg-blue-800 uppercase text-white text-lg font-bold"
                value="Registrar Cliente"
              />
          </Form>
      </div>
    </>
  )
}

export default NuevoCliente
