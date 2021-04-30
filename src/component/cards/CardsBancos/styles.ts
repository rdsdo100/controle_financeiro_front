import styled from 'styled-components';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";



export const Container = styled.div`
position: relative;
height: 150px;
width: calc(5px -100%);
display: flex;
box-sizing: border-box;
border-radius: 5px;
background-color: ${props => props.theme.colors.tertiary};
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  margin: 10px 10px 5px 5px;
  
`;

export const DivLogoBanco = styled.div`
position: relative;
height: 100%;
width: 15%;


`;

export const DivBodyBanco = styled.div`
position: relative;
height: 100%;
width: 65%;

`;

export const DivButtons = styled.div`
position: relative;
height: 100%;
width: 25%;

`;

export const ImageContaBanco = styled.img`
position: absolute;
width: 100px;
 height: 100px;
margin: 25px 0 ; 
padding-left: 5px;

`;

export const Titulos = styled.h1`
position: relative;
color: ${props => props.theme.colors.gray};
font-family: 'roboto' ;
font-weight: 600;
font-size: 18pt;
`;

export const SubTitulos = styled.h2`

color: ${props => props.theme.colors.gray};
font-family: 'roboto' ;
font-weight: 600;
font-size: 14pt;
`;

export const Nomes = styled.h3`

color: ${props => props.theme.colors.gray};
font-family: 'roboto' ;
font-weight: 600;
font-size: 12pt;
`;

export const ButtonCardBancos = styled.button`
    background-color: transparent;
    padding:0;
    margin: 0 5px;

   
`;


export const  MdDeleteForeverIcon = styled(MdDeleteForever)`
font-size: 30px;
  position: relative;
  color: ${props => props.theme.colors.white};
  padding: 0;
  margin: 0;

  &:hover {
        background-color: ${props => props.theme.colors.warning};
        color: ${props => props.theme.colors.black};
        border-radius: 8px;
    }


`;

export const  MdModeEditIcon = styled(MdModeEdit)`
font-size: 30px;
  position: relative;
  color: ${props => props.theme.colors.white};
  padding: 0;
  margin: 0;
  &:hover {
        background-color: ${props => props.theme.colors.info};
        color: ${props => props.theme.colors.black};
        border-radius: 8px;
    }
`;