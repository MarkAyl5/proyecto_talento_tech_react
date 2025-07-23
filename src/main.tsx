import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.tsx'
import Products from './components/Products/Products..tsx'
import AdminManagement from './components/AdminManagement.tsx'

const router = createBrowserRouter([
  {path:"/", element: <App/>},
  {path:"/products", element: <AdminManagement/>},
  {path:"*", element: <NotFoundPage/>},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
