import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Rotas de páginas
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { PaginasCms } from './pages/PaginasCms'
import { Erro404 } from './pages/Erro404'

// Páginas

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Erro404 />
  },
  {
    path: '/paginas',
    element: <PaginasCms />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
