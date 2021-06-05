
import styled from 'styled-components';

export const DivComponent = styled.div`

 position: relative;
 width: 100%;
 height: 450px;
display: flex;
flex-direction: column;

justify-content: space-between;
    
`;

export const FormComponent = styled.div`

 position: relative;
 display: grid;
  grid-template-rows: 70px 70px 70px;
  grid-template-columns: 20% 40% 30% 10% ;

    
    grid-template-areas:
    "DI DN DDATA DBU" 
    "DI DD DDATA DBU"
    "DI DV DB DB";

  

`;

export const DivButtons = styled.div`

 position: relative;
 display: flex;
 flex-direction: row;
 width: 100%;
 height: 50px;

 
`;
export const DivButton = styled.div`

 position: relative;
padding: 0 5px;
 width: 50%;


 
`;




