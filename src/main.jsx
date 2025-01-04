import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/pages/404.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Category from './components/pages/Category.jsx'
import Products from './components/pages/Product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/category/:slug",
    element: <Category/>
  },
  {
    path: "/product/:slug",
    element: <Products/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
