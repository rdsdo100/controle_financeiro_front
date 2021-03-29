import styled from "styled-components";


export const Component = styled.div`
    
`;

export const IMG = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const H1 = styled.h1`
  position: relative;
  font-size: 140pt;
  font-family: Roboto, sans-serif;
  text-align: center;
  top: 250px;
  color: ${props => props.theme.colors.tertiary};


`;

