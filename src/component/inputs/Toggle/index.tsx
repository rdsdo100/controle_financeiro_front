import React, { InputHTMLAttributes } from 'react';
import {Component, Span , H1Toggle, Input,Label} from "./styles"

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Toggle: React.FC<IInputProps> = ({  children, ...rest }) =>  (

    
<Component>
<H1Toggle>{children}</H1Toggle>
                <Label>
         
                    <Input type="checkbox" {...rest} ></Input>
                    <Span></Span>
                </Label>
</Component>

);
export default Toggle;