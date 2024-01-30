import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayOut/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/LOgin";
import Registration from "../Pages/Registration/Registration";
import AddTask from "../Pages/AddTask/AddTask";
import PrivateRouts from "./PrivateRouts";




const Route = createBrowserRouter ([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
               
            },
            {
                path:"/add-task",
                element:<PrivateRouts><AddTask></AddTask></PrivateRouts>
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Registration></Registration>
    }
])

export default Route;