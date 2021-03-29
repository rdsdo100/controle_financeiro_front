import React, { InputHTMLAttributes } from 'react';

import {LoginBoxs , UserBoxs, Input, Label} from "./styles"

type IInputProps = InputHTMLAttributes<HTMLInputElement>;



const InputId: React.FC<IInputProps> = ({  children, ...rest }) =>  (

       
           <>
                <Input required {...rest} />
                <Label>{children}</Label>
         </>
        

    );
export default InputId;