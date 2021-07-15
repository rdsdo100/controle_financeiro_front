import React, { InputHTMLAttributes } from 'react';

import {LoginBoxs , UserBoxs, Input, Label} from "./styles"

type IInputProps = InputHTMLAttributes<HTMLInputElement>;



const InputCadastro: React.FC<IInputProps> = ({  children, ...rest }) =>  (

        <LoginBoxs>
            <UserBoxs>
                <Input required {...rest} />
                <Label>{children}</Label>
            </UserBoxs>
        </LoginBoxs>

    );
export default InputCadastro;