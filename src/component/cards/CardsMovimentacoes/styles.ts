import styled from 'styled-components';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

export const DivButtons = styled.div`
grid-area: DBU;
 display: none;
position: relative;
padding: 15px;
`;

export const Container = styled.div`
position: relative;
height: 150px;
width: calc(5px -100%);
box-sizing: border-box;
border: 1px solid  white;
border-radius: 5px;
background-color: ${props => props.theme.colors.tertiary};
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  margin: 10px 10px 5px 5px;

  display: grid;
  grid-template-rows: 50px 50px 50px;
  grid-template-columns: 20% 40% 30% 10% ;

    
    grid-template-areas:
    "DI DN DDATA DBU" 
    "DI DD DDATA DBU"
    "DI DV DB DB";

  &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.black};
        border-radius: 8px;
    }
    
 &:hover   ${DivButtons} {
   display: flex;
   justify-content: flex-end;
  }
  
`;

export const DivBodyBanco = styled.div`
position: relative;
height: 100%;
width: 65%;

`;

export const  DivImage = styled.div`
grid-area: DI;
border: 1px solid blue;

`;

export const  DivNome = styled.div`
grid-area: DN;
border: 1px solid blue;

`;

export const  DivDescricao = styled.div`
grid-area: DD;
border: 1px solid blue;

`;

export const  DivValor = styled.div`
grid-area: DV;
border: 1px solid blue;

`;

export const  DivData = styled.div`
grid-area: DDATA;
border: 1px solid blue;

`;

export const  DivBanco = styled.div`
grid-area: DB;
border: 1px solid blue;

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

