import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/pages/404.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Products from './components/pages/Products.jsx'
import Category from './components/pages/Category.jsx'
// import Product from './components/pages/Product.jsx'
import Portfolio from './components/pages/Portfolios.jsx'
import Factory from './components/pages/Factories.jsx'
import FAQ from './components/pages/FAQ.jsx'

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
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/factory",
    element: <Factory/>
  },
  {
    path: "/faq",
    element: <FAQ/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/category/:slug",
    element: <Category/>
  },
  // {
  //   path: "/product/:slug",
  //   element: <Product/>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
