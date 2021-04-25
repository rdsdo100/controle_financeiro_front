import styled from 'styled-components';

export const Container = styled.select`
    width: 100%;
    margin: 7px 0;
    padding: 3px;
    font-size: 14px;
  color: ${props => props.theme.colors.gray};
    font-weight: 600;
    border-radius: 5px;

  color: ${props => props.theme.colors.gray};

  border: 2px solid ${props => props.theme.colors.primary};
  
  background: ${props => props.theme.colors.tertiary};

  > option{
   width: 100%;
    margin: 7px 0;
    padding: 3px;
    font-size: 14px;
  color: ${props => props.theme.colors.gray};
    font-weight: 600;
    border-radius: 5px;

  color: ${props => props.theme.colors.gray};

   
  background: ${props => props.theme.colors.tertiary};
  }

`;

export const LoginBoxs = styled.div`
  position: relative;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

export const UserBoxs = styled.div`
  position: relative;
`;

