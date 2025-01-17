import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Teacherlist from "./components/lists/Teacherlist";
import Home from "./components/Home";
import Studentlogin from "./pages/Studentlogin";
import Teacherlogin from "./pages/Teacherlogin";
import Adminlogin from "./pages/Adminlogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<h1>404!! not found...</h1>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"admin",
        element:<Admin></Admin>

      },
      {
       path:"student",
       element:<Student/>

      }
      ,
  {
    path:"teacher",
    element:<Teacher/>
  },
    ]

  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
{
  path:"/list/teacher",
  element:<Teacherlist/>
},
{
  path:"/studentlogin",
  element:<Studentlogin/>
}
,{
  path:"/teacherlogin",
  element:<Teacherlogin/>
},
{
  path:"/adminlogin",
  element:<Adminlogin/>
}


]);

export default router;
