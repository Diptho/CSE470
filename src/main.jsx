import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import UserProvider from './components/UserProvider.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children:[
    //   {
    //     path:"/login",
    //     element:<Login></Login>
    //   },
    //   {
    //     path:"/signup",
    //     element:<SignUp></SignUp>
    //   }
    // ],
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />

    </UserProvider>
  </React.StrictMode>,
)
