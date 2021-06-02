import React, { ChangeEvent } from 'react';
import TelasFlutuantes from '../../TelasFlutuantes';


interface IEditContas {


  readonly fechar: (arg0: string) => void;
 
}

const EditMovimentacoes: React.FC<IEditContas> = ({

  fechar
}) => {


  const auth = localStorage.getItem('Authorization')

  function habdleInputChangeNomeConta(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    //setNomeContaEdit(String(value))
  }

  const buttonFechar = () => {

    fechar("none");
  }

  return (
    <TelasFlutuantes
      telaHeight="70%"
      telaWidth="80%"
      fechar={buttonFechar}>
     


      

    </TelasFlutuantes>
  )
};

export default EditMovimentacoes;