import styled from 'styled-components';

export const LoginBoxs = styled.div`
  position: relative;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

export const UserBoxs = styled.div`
  position: relative;
`;

export const  Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
  border-radius: 8px;
  border: 2px solid ${props => props.theme.colors.primary};
  outline: none;
  background: ${props => props.theme.colors.tertiary};
`;

export const  Label = styled.label`
  position: absolute;
  top:0;
  left: 15px;
  padding: 10px 0;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
  font-weight: 600;
  pointer-events: none;
  transition: .5s;


  ${Input}:focus ~ &,
  ${Input}:valid ~ &
  {
    top: -25px;
    left: 0;
    color: ${props => props.theme.colors.gray};
    font-size: 14px;
  }
 
  
  
`;