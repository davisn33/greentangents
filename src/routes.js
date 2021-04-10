import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import DashboardView from "./views/DashboardView";
import AccountView from "./views/AccountView";
import TaskView from "./views/TaskView";
import DevicesView from "./views/DevicesView";
import LoginView from "./views/auth/LoginView";
import NotFoundView from "./views/errors/NotFoundView";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <DashboardView /> },
      { path: "devices", element: <DevicesView /> },
      { path: "account", element: <AccountView /> },
      { path: "tasks", element: <TaskView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <LoginView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
