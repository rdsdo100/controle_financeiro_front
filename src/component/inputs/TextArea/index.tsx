import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { Container }  from './styles'

type ITextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> 

const TextArea: React.FC<ITextAreaProps> = ({ ...rest }) => (
    <Container {...rest} />
);

export default TextArea;