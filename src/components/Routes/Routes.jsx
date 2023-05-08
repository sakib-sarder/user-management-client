import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddUser from "../Pages/AddUser";
import Users from "../Pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "add-user",
        element: <AddUser></AddUser>,
      },
    ],
  },
]);

export default router;
