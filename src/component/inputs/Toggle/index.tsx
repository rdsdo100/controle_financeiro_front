import React, { InputHTMLAttributes } from 'react';
import {Component, Span, Input,Label} from "./styles"

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Toggle: React.FC<IInputProps> = ({  children, ...rest }) =>  (

<Component>
                <Label>
                    <Input type="checkbox" {...rest} ></Input>
                    <Span></Span>
                </Label>
</Component>
);
export default Toggle;