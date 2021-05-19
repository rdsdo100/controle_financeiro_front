import React from 'react';
import { Container, DivCarregamento, Loader } from './styles';

interface IStyles {
    displayCarregamento?: string 
}

const Carregamento: React.FC<IStyles> = ({children , displayCarregamento = "none" }) => {
    return (
        <DivCarregamento style={{display: displayCarregamento  }} >
            <Container>
                <Loader></Loader>
            </Container>
        </DivCarregamento>

    );
}

export default Carregamento;