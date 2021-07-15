import styled from "styled-components";


export const Component = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient( ${props => props.theme.colors.primary}, ${props => props.theme.colors.tertiary} );
    
`;

export const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 500px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: linear-gradient( ${props => props.theme.colors.secundary} , ${props => props.theme.colors.primary});
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  

`;
