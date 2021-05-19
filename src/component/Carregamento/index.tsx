import React from 'react';
import { Container, DivCarregamento, Loader } from './styles';


const Carregamento: React.FC = () => {
    return (
        <DivCarregamento>
            <Container>
                <Loader></Loader>
            </Container>
        </DivCarregamento>

    );
}

export default Carregamento;