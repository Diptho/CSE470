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
import Home from './components/Pages/Home.jsx';
import AdminHome from './components/Admin/AdminHome.jsx';
import InstructorHome from './components/Instructor/InstructorHome.jsx';
import StudentHome from './components/StudentHome.jsx';
import Dashboard from './components/Pages/Dashboard.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Classes from './components/Pages/Classes.jsx';
import BookedClasses from './components/BookedClasses.jsx';
import AllUsers from './components/Admin/AllUsers.jsx';
import AddClass from './components/Instructor/AddClass.jsx';
import ManageClasses from './components/Admin/ManageClasses.jsx';
import InstructorClasses from './components/Instructor/InstructorClasses.jsx';
// import { getTodos, postTodo } from '../my-api'


const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // admin routes
      {
        path: '/dashboard/adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: '/dashboard/allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/manageClasses',
        element: <ManageClasses></ManageClasses>
      },
      // {
      //   path: '/dashboard/allPayments',
      //   element: <AllPayments></AllPayments>
      // },

      // instructors routes
      {
        path: '/dashboard/instructorHome',
        element: <InstructorHome></InstructorHome>
      },
      {
        path: '/dashboard/addClass',
        element: <AddClass></AddClass>
      },
      {
        path: '/dashboard/instructorClasses',
        element: <InstructorClasses></InstructorClasses>
      },
      // {
      //   path: '/dashboard/updateClass/:id',
      //   element: <UpdateClasses></UpdateClasses>
      // },

      // student routes /////////////////////////////////////////////////

      {
        path: '/dashboard/studentHome',
        element: <StudentHome></StudentHome>
      },
      {
        path: '/dashboard/bookedClasses',
        element: <BookedClasses></BookedClasses>
      },
      // {
      //   path: '/dashboard/payment/:id',
      //   element: <Payment></Payment>
      // },
      // {
      //   path: '/dashboard/confirmedClasses',
      //   element: <ConfirmedClasses></ConfirmedClasses>
      // },
      // {
      //   path: '/dashboard/paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>
      // },
    ]

  },
  {
    path: '/*',
    element: <div>404</div>
  }


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserProvider>
  </React.StrictMode>,
)
