import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Products from './Components/Products/Products.jsx';
import Details from './Components/Details/Details.jsx';
import Order from './Components/Order/Order.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AuthContextProvider from './Components/AuthContext/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/products',
        loader: () => {
          return fetch("https://fakestoreapi.com/products")
        },
        Component: Products
      },
      {
        path: '/products/:productsId',
        loader: ({ params }) => {
          return fetch(`https://fakestoreapi.com/products/${params.productsId}`)
        },
        Component: Details
      },
      {
        path: '/products/order/:orderId',
        loader: ({ params }) => {
          return fetch(`https://fakestoreapi.com/products/${params.orderId}`)
        },
        Component: Order
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/dashboard',
        Component: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        )
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
