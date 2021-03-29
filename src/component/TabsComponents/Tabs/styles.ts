import styled from "styled-components";

export const LI = styled.li`
  float: left;
  
`;


export  const LabelTabs = styled.label`
  position: relative;
  width: 600px;
  padding: 25px;
  background-color: ${props => props.theme.colors.black};
  display: block;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  text-align: center;

`;

export const Content = styled.div`
  
    border-top: 5px solid ${props => props.theme.colors.warning};;
    background-color: ${props => props.theme.colors.secondary};
    display: none;
    position: absolute;
    width:100%;
  height: calc(100% - 371px);
    left: 0;
    
`;

export const RdTabs = styled.input`
  display: none;
  
  &:checked ~ ${LabelTabs} {
    background-color: ${props => props.theme.colors.warning};
  }

  :checked ~ ${Content} {
    display: block;
  }
  
`;

export const TabBody = styled.div`
 
`;