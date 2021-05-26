import React from 'react';
import CardFooter from './CardFooter';
import CardHead from './CardHead';
import CardListBody from './CardListBody';

const CardBuscaComponent: React.FC = ({ children }) => {

    return (

        <div>
            <CardHead></CardHead>
            <CardListBody>{children}</CardListBody>
            <CardFooter></CardFooter>
        </div>
    )

};

export default CardBuscaComponent;