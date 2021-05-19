import styled from 'styled-components';

export const Container = styled.div`
  transform: scale(5);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background: transparent;
  box-sizing: border-box;
  border-radius: 10px;    
`;
export const  Loader = styled.div`


animation: is-rotating 1.5s infinite;
  border: 16px solid transparent;
  border-radius: 50%;
  border-top-color: ${props => props.theme.colors.white};
  height: 150px;
  width: 150px;


@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

`;


export const DivCarregamento = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,.4);
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 99;


`;

export const TextCarregamento = styled.h1`



`;


