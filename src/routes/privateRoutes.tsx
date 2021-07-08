import React from "react";
import { Route, useHistory } from "react-router-dom";

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

export default PrivateRoute