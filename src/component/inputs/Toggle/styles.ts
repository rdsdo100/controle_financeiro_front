import styled from 'styled-components';

export const Component = styled.div`
display: flex;
  align-content: center;
  margin: 20px;

`;

export const  Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
`;

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;



  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  Input:checked + &:before {
    -webkit-transform: translateX(36px);
    -ms-transform: translateX(36px);
    transform: translateX(36px);

  }

  Input:checked + & {
    background-color: #2126F3;
  }

  input:focus + & {
    box-shadow: 0 0 1px #2126F3;
  }

  /* Rounded sliders */
  & {
    border-radius: 34px;
  }

  &:before {
    border-radius: 50%;
  }



`;

export const  Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
`;

export const H1Toggle = styled.h1`

margin: 0 15px;



`;