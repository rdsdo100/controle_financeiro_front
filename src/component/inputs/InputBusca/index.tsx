import React, { InputHTMLAttributes } from 'react';

import {Input} from "./styles"

type IInputProps = InputHTMLAttributes<HTMLInputElement>;



const InputBusca: React.FC<IInputProps> = ({  children, ...rest }) =>  (

    
                <Input required {...rest} />
           
           

    );
export default InputBusca;