import React, { InputHTMLAttributes } from 'react'

import './ok.css'
import { Container }  from './styles'

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputLogin: React.FC<IInputProps> = ({ ...rest }) => {
    
    return (
        <form>
            <input type="text" name="name" className="question" id="nme" required autoComplete="off"/>
            <label htmlFor="nme"><span>What's your name?</span></label>

        </form>






)
    };

export default InputLogin
