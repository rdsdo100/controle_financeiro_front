import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

import { Container }  from './styles'

type ISelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const SelectBusca: React.FC<ISelectProps> = ({ ...rest }) => (
   
    <Container {...rest} />
);

export default SelectBusca;