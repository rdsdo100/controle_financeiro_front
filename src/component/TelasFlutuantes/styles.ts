import styled from 'styled-components';


export const Component = styled.div`

 position: relative;
`;

export const BarraSuperior = styled.div`
 position: relative;
 background-color: ${props => props.theme.colors.secundary};

`;

export const ButtonMessage = styled.button`
position: relative;
width: 100%;
background-color: ${props => props.theme.colors.warning};
color: ${props => props.theme.colors.white};

`;


export const TelaFlutuante = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.colors.secundary};
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.primary};

`;




