import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/NotFound.jsx";
import FormLogin from "./routes/FormLogin.jsx";
import FormRegister from "./routes/FormRegister.jsx";
import NavBar from "./components/NavBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar /> <App />
      </>
    ),
    errorElement: <NotFound />,
  },

  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <FormLogin />
      </>
    ),
  },

  {
    path: "/register",
    element: (
      <>
        <NavBar />
        <FormRegister />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
