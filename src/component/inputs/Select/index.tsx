import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

import { Container, LoginBoxs , UserBoxs }  from './styles'

type ISelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<ISelectProps> = ({ ...rest }) => (
   
    <LoginBoxs>
            <UserBoxs>
    <Container {...rest} />
    </UserBoxs>
    </LoginBoxs>
);

export default Select;