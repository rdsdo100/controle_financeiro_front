import styled from 'styled-components';

export const Container = styled.div`
    position: relative
`;

export const Card = styled.div`
position: relative;
border-radius: 5px;  
    border: black 2px solid;
 display: flex;
  flex-direction: column;
  box-sizing:border-box;
    background-color:  ${props => props.theme.colors.secundary};


`;



export const CardListComponent = styled.ul`
position: relative;
    height: calc(100vh - 200px);
    
    margin: 0;
display: flex;
flex-direction: column;

    overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 10px;
        }
    
        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.gray};
            border-radius: 10px;
        }
    
        ::-webkit-scrollbar-track {
            background-color: ${props => props.theme.colors.tertiary};
        }
    





`;