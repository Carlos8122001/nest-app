import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/NotFound.jsx";
import FormLogin from "./routes/FormLogin.jsx";
import FormRegister from "./routes/FormRegister.jsx";
import NavBar from "./components/NavBar.jsx";
import ContextProvider from "./context/Context.jsx";
import useLocalStorage from "./hooks/useLocalStorage.jsx";

const { getLocalStorage } = useLocalStorage();
const user = getLocalStorage("const access_token");
const router = createBrowserRouter([
  {
    path: "/",
    element: <FormLogin />,
    errorElement: <NotFound />,
  },

  {
    path: "/register",
    element: <FormRegister />,
  },

  {
    path: "/dashboard",
    element: user === "" ? (
      <FormLogin />
    ) : (
      <>
        <NavBar />
        <App />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
