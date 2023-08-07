import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import Index from './pages/Index'
import {loader as clientesLoader } from './data/loader'
import {loader as editarClienteLoader, action as editarClienteAction } from './data/loaderEditar'
import {action as nuevoClienteAction } from './data/action'
import {action as eliminarClienteAction } from './data/eliminarAction';
import ErrorPage from './components/ErrorPage'
import EditarCliente from './pages/EditarCliente'


import './index.css'




const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout/>,
      children:[
        {
          index:true,
          element: <Index/>,
          loader: clientesLoader,
          errorElement: <ErrorPage/>
        },
        {
            path: '/clientes/nuevo',
            element: <NuevoCliente/>,
            action: nuevoClienteAction,
            errorElement: <ErrorPage/>
        },
        {
          path: '/clientes/:clienteId/editar', // el nombre puede ser cualquiera, pero que sea significativo.
          element: <EditarCliente/>,
          loader: editarClienteLoader,
          action: editarClienteAction,
          errorElement: <ErrorPage/>
        },

        {
          path: '/clientes/:clienteId/eliminar', //algunas veces en vez de eliminar sale como destroy.
          element: <EditarCliente/>,
          action: eliminarClienteAction,
          errorElement: <ErrorPage/>
        },

      ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
