import { createBrowserRouter } from "react-router-dom";
import Mani from "../LayOut/Mani";
import Homepage from "../Pages/HomePage/Homepage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Mani></Mani>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
