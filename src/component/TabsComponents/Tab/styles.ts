import styled from "styled-components";

export const NavTabs = styled.nav `
  width:100%;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  position: relative ;

  box-shadow: 0 0 1em black;
  display: flex;
  flex-direction: column;


`;
export const UL = styled.ul`
width:100%;
  height: 100%;
  list-style: none;
  top: 0;
`;
