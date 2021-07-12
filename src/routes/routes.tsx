
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User"
import PrivateRoute from "./privateRoutes";


const Routes = () => {
  return (
    <BrowserRouter>
     
        <Route component={Login} path='/' exact ></Route>
        <Route component={Home} path='/home'  ></Route>
        <PrivateRoute component={User} path='/user'  ></PrivateRoute>

        
        


     
    </BrowserRouter>
  )
}

export default Routes


