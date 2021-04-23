import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
 position: relative;
  margin: 0 auto;
  background-color:  ${props => props.theme.colors.primary};
  
`;


export const DivuttonEnviar = styled.div`
 
 position: relative;

 button{
  padding: 0px 20px;
  width: 100%;
 
 }
`;
export const DivButtonEditar = styled.div`
 
 position: relative;
 display: flex;
 margin: 10px;
 
 button{
  margin: 0px 10px;
  width: 100%;
 }
 
`;


export const DivSelect = styled.div`
 
 position: relative;
 display: flex;
 margin: 10px;

 
`;