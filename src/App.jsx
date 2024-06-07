import { useEffect, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useOutlet,
} from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/landing/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Landing/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <Signup/>
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />
}