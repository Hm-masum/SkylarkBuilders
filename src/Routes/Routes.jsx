import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import EstateDetails from "../Pages/EstateDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element:<Home></Home>,
            loader:()=> fetch('/fakeData.json')
        },
        {
            path: "/estate/:id",
            element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
            loader:()=> fetch('/fakeData.json')
        },
        {
            path: "/login",
            element:<Login></Login>,
        },
        {
            path: "/register",
            element:<Register></Register>,
        },
        {
            path: "/about",
            element:<About></About>,
        },
        {
            path: "/updateProfile",
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        }
    ]
  },
]);


export default router;