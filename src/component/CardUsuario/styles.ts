import styled from 'styled-components';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

export const Container = styled.div`
  position: relative;
    display: flex;
    height: 120px;
    width: calc(100% - 20px);
    border-radius: 8px;
    margin: 10px;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 8px 5px 18px rgba(120,120,120,.4);
`;

export const LI = styled.li`
width: 100%;
    position: relative;
    display:flex;
    justify-content: space-between;
    list-style: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.gray};
    padding: 10px;
    &:hover {
        background-color: ${props => props.theme.colors.tertiary};
    
        border-radius: 8px;
    }
`;

export const Header = styled.h1`
    position: relative;
    font-size: 12pt;
`;

export const Descripiton = styled.p`
    position: relative
`;

export const DataAtentendimento = styled.label`
    position: relative
`;

export const  ContainerButtons = styled.div`
    position: relative
`;



export const  ContainerInfo = styled.div`
    position: relative
`;

export const Button = styled.button`
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
        background-color: ${props => props.theme.colors.white};
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
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.black};
        border-radius: 8px;
    }
`;