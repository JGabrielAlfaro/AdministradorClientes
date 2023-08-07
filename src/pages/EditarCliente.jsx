import { Form,useNavigate,useLoaderData,useActionData } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";


const EditarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();
  // console.log(cliente)

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
    <p className="mt-3"> A continuación podras modificar los datos de un cliente</p>

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
            <Formulario cliente={cliente} />
            <input
              type="submit"
              className="mt-5 w-full bg-blue-800 uppercase text-white text-lg font-bold"
              value="Guardar Cambios"
            />
        </Form>
    </div>
  </>
  )
}

export default EditarCliente
