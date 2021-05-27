import styled from 'styled-components';

export const Container = styled.select`
     width: 100%;
  padding: 10px 0;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
  border-radius: 8px;
  border: 2px solid ${props => props.theme.colors.primary};
  outline: none;
  background: ${props => props.theme.colors.tertiary};
  font-weight: 600;

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

