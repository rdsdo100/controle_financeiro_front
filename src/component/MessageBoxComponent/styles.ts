import styled from 'styled-components';


export const Component = styled.div`

 position: relative;


  
    
`;

export const ButtonMessage = styled.button`
position: relative;
width: 60px;
background-color: ${props => props.theme.colors.warning};
color: ${props => props.theme.colors.white};

`;


export const MessageBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  padding: 10px;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.colors.tertiary};
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;

`;




