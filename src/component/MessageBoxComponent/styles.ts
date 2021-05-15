import {  IoMdClose } from "react-icons/io";
import styled from 'styled-components';




export const Component = styled.div`

 position: relative;
display: flex ;
flex-direction: row;
justify-content: center;

color:  ${props => props.theme.colors.white};
font-size: 16pt;
font-weight: 600;
font-family: 'Roboto', sans-serif;


`;

export const BarraSuperior = styled.div`
 position: relative;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-end;
 width: 100%;
  height: 40px;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 10px 10px 0 0;
  

`;





export const ButtonMessage = styled.button`
position: relative;
width: 100%;
background-color: ${props => props.theme.colors.warning};
color: ${props => props.theme.colors.white};

`;


export const TelaFlutuante = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.colors.secundary};
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.primary};

`;

export const DivButton = styled.div`

padding: 0 30px;
padding-bottom: 15px
`;




export const  MdDeleteForeverIcon = styled(IoMdClose)`
font-size: 30px;
  position: relative;
  color: ${props => props.theme.colors.white};
  padding: 0;
  

  &:hover {
        background-color: ${props => props.theme.colors.warning};
        color: ${props => props.theme.colors.black};
        border-radius: 8px;
    }


`;

export const  FecharTela = styled.button`


background-color: transparent;
    padding:0;
    margin: 0 5px;

`;

export const DivMessage = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,.1);
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 99;


`;