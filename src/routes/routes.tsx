import React from "react";
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom'
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Conta from "../pages/Conta";
import Usuario from "../pages/Usuario";
import ObjetivosFinaceiros from "../pages/ObjetivosFinaceiros";
import Movimentacoes from "../pages/Movimentacoes";


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
        <PrivateRoute component={Conta} path='/conta' ></PrivateRoute>
        <PrivateRoute component={Usuario} path='/usuario' ></PrivateRoute>
        <PrivateRoute component={ObjetivosFinaceiros} path='/objetivos' ></PrivateRoute>
        <PrivateRoute component={Movimentacoes} path='/movimentacoes' ></PrivateRoute>
       
        <Route component={ErrorPage} path='*'></Route>


      </Switch>
    </BrowserRouter>
  )
}

export default Routes


