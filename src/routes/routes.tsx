import React from "react";
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom'
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Usuario from "../pages/Usuario";

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
      <Switch> // não deixa mais de uma rota ser chamada ao mesmo tempo

        <Route component={Login} path='/' exact ></Route>
        <PrivateRoute component={Home} path='/home' ></PrivateRoute>
        <PrivateRoute component={Usuario} path='/usuario'></PrivateRoute>
        <Route component={ErrorPage} path='*'></Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Routes


