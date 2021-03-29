import React from 'react';
import { ImMenuIcons } from '../Menu/styles';
import { Container } from './styles'


interface IMessages {
  message: string

}

const CardPopUp: React.FC<IMessages> = ({children , message}) => {




  return (

    <Container>
      <div>
        <label htmlFor="check">
          <span>
            <ImMenuIcons />
          </span>
        </label>
      </div>
      <div>
        <p>{}</p>
      </div>
      <div>
        <button type="button">OK</button>
      </div>
    </Container>
  )

};

export default CardPopUp;