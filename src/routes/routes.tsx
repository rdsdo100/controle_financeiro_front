import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";

import Home from "../pages/Home";



const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {

  const history = useHistory()
 // const auth = useSelector((state: ApplicationState) => state.auth.auth)
 const auth = localStorage.getItem('Authorization')
  const routeComponent = (props: any) => (
    auth
      ? React.createElement(component, props)
      : history.push('/algoErrado')
  );

  return <Route {...rest} render={routeComponent} />;
};


const Routes = () => {
  return (
    <BrowserRouter>
     
        <Route component={Home} path='/' exact ></Route>

        
        


     
    </BrowserRouter>
  )
}

export default Routes


