import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { Container }  from './styles'

interface ITextArea {
    placeholDerDescricao?: string
    altura: string
}



const TextArea: React.FC<ITextArea> = ({  altura , placeholDerDescricao}) => (
    <Container placeholder={placeholDerDescricao} style= {{height: altura}} />
);

export default TextArea;