import styled from 'styled-components';

export const Container = styled.div`
    position: relative
`;

export const Card = styled.div`
position: relative;
border-radius: 5px;  
    border: black 2px solid;
 display: flex;
  flex-direction: column;
  box-sizing:border-box;
    background-color:  ${props => props.theme.colors.secundary};


`;

export const CardBuscaComponent = styled.ul`
position: relative;
    height: 80px;
    margin: 0;
display: flex;
flex-direction: row;

`;