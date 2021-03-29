import styled from "styled-components";
import {Link} from "react-router-dom";
import {ImMenu} from "react-icons/im";

export const Container = styled.div`
  background-color: aqua;
  width: 100vw;
  height: 100vh;
    
`;

export const Nav = styled.nav`

  position: absolute;
  background-color: ${props => props.theme.colors.secundary};
  border: 1px solid black;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width:  350px;
  height: 100vh;
  top: 0;
  left: -350px;
  z-index: 2;

`;

export const A = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  display: block;
  padding: 20px 5px;
  padding-left: 20px;
  color: white;


  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
    color: black;
  }
  
`;

export const Label = styled.label`

    padding: 0;
    position: relative;
    z-index: 3;
    margin: 0 10px;

`;

export const UL = styled.ul`
    list-style: none;
    top: 70px;
    width: 100%;
    position: absolute;
`;

export  const  ImMenuIcons = styled(ImMenu)`
  font-size: 35px;
  position: relative;
  color: ${props => props.theme.colors.gray};
  padding: 0;
  margin: 0;
`;

export  const InputCheck = styled.input`
  display: none;
  &[type = 'checkbox']:checked ~ ${Nav} {
    transform: translateX(350px);
  }
`;

export const  Span = styled.span`
  position: relative;
  top: 0px;
`;

export const DivMenu = styled.div`
  position: absolute;
  background-color: rgba(00,00,00,.5);
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 1;


`;