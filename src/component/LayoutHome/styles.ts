import styled from 'styled-components';

export const Container = styled.div`
position: relative;
height: 100vh;
width: 100vw;
display: grid;
grid-template-rows:  50px auto;
    grid-template-columns: auto 1200px auto ;

    background-color:${props => props.theme.colors.primary};
    grid-template-areas:
    "MH MH MH" 
    "ATL PR ATR";
    grid-gap: 5px;

`;

export const HeadLayout = styled.div`
grid-area: MH;
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
background-color:  ${props => props.theme.colors.primary};


`;
export const BodyLayout = styled.div`
grid-area: PR;
position: relative;
flex-direction: row;
justify-content: center ;
width: 100%;
background-color:  ${props => props.theme.colors.secundary};

`;

export const H1 = styled.div`
color: ${props => props.theme.colors.gray};
font-family: 'roboto' ;
font-size: 24pt;
 `;

