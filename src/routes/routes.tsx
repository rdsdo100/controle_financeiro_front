
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User"
import PrivateRoute from "./privateRoutes";


const Routes = () => {
  return (
    <BrowserRouter>
     
        <Route component={Home} path='/' exact ></Route>
        <PrivateRoute component={User} path='user' exact ></PrivateRoute>

        
        


     
    </BrowserRouter>
  )
}

export default Routes


