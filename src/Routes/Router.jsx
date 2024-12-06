import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import AddProduct from '../Pages/AddProduct/AddProduct';
import BrandProducts from '../Pages/BrandProducts/BrandProducts';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import Cart from '../Pages/Cart/Cart';
import PrivateRoute from './PrivateRoute';

// Access environment variables
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CART_API_PATH = import.meta.env.VITE_CART_API_PATH;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('/brands.json')
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/products/:brand',
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) =>
          fetch(`${API_BASE_URL}/products/${params.brand}`),
      },
      {
        path: '/update/:brand/:_id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`${API_BASE_URL}/products/${params.brand}/${params._id}`),
      },
      {
        path: '/details/:brand/:_id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`${API_BASE_URL}/products/${params.brand}/${params._id}`),
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch(API_BASE_URL+CART_API_PATH),
        // loader:()=>fetch(`http://localhost:5000/cart`),
      },
    ],
  },
]);

export default Router;
