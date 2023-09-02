import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Facewash from "../Pages/Home/CardProduct/Facewash";
import Cream from "../Pages/Home/CardProduct/Cream";
import Lotion from "../Pages/Home/CardProduct/Lotion";
import Login from "./Login";
import SignUp from "./SignUp";
import AllPages from "../Pages/Home/AllPages/AllPages";
import Cabinate from "../Pages/Home/Cabinate/Cabinate";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>  
        },
        {
            path: "/facewash",
            element:<Facewash></Facewash>
        },
        {
            path: "/cream",
            element:<Cream></Cream>
        },
        {
            path: "/lotion",
            element:<Lotion></Lotion>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/signup",
            element:<SignUp></SignUp>
        },
        {
            path: "/allpages",
            element:<AllPages></AllPages>
        },
        {
            path: "/cabinate",
            element:<Cabinate></Cabinate>
        }
      ]
    },
  ]);