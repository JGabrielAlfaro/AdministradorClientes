export async function obtenerClientes() {


    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    // console.log(respuesta)
    const resultado = await respuesta.json()
    // console.log(resultado)
    return resultado;

}

export async function obtenerCliente(id) {


    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    // console.log(respuesta)
    const resultado = await respuesta.json()
    // console.log(resultado)
    return resultado;

}

export async function agrearClientes(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id,datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT', // Tambien puede ser PATCH.
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
    // console.log("Eliminando....", id)

    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE', 
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }

}