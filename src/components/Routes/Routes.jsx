import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddUser from "../Pages/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "add-user",
        element: <AddUser></AddUser>,
      },
    ],
  },
]);

export default router;
