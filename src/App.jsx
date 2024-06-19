import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout, { DashboardLayout } from "./components/Layout";
import Landing from "./pages/landing/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import AuthContext, { AuthProvider } from './pages/auth/AuthProvider';
import ProtectedRoute from './pages/auth/ProtectedRoute';


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <Signup />
        },
      ]
    },
    {
      path: "/dashboard",
      // element: <ProtectedRoute/>,
      element: <DashboardLayout/>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/dashboard/transaction",
          element: 'info'
        },
        {
          path: "/dashboard/account",
          element: 'info'
        },
        {
          path: "/dashboard/settings",
          element: 'info'
        },
      ]
    }
  ]);

  return (
<AuthProvider>    <RouterProvider router={router} /></AuthProvider>
  );
}