import { useContext } from "react";
import { useRoutes } from "react-router-dom";
import { authContext } from "../context/useContext";
import FormLogin from "../routes/FormLogin";
import NotFound from "../routes/NotFound";
import Register from "../routes/FormRegister";
import NavBar from "../components/NavBar";
import Dashboard from "../routes/Dashboard";

export default function UseRouting() {
  const { getUserId } = useContext(authContext);
  
  return useRoutes([
    {
        path: "/",
        element: <FormLogin />,
        errorElement: <NotFound />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: getUserId() === 0 ? (
          <FormLogin />
        ) : (
          <>
            <NavBar />
           <Dashboard/>
          </>
        ),
      },
  ]);
}
