import React, { ChangeEvent } from 'react';
import Button from '../../buttons/Button';
import TelasFlutuantes from '../../TelasFlutuantes';
import { DivButton, DivButtons, DivComponent, FormComponent, DivId, 
  DivNome, DivData, DivDescricao, DivEntrada, DivEstorno, DivValor } from './styles';

interface IMovimentacoes {
  dataEstorno?: boolean
  dataMovimento?: Date
  descricao?: string
  estorno?: true
  id?: number
  nomeMovimentacoes?: string
  tipoEntrada?: true
  valorContaAnterior?: number
  valorMovimento?: number
}

interface IEditMovimentacoes {
  editMoviemtacoes?: boolean
  movimentacoes?: IMovimentacoes

  readonly fechar: (arg0: string) => void;


}

const EditMovimentacoes: React.FC<IEditMovimentacoes> = ({
  editMoviemtacoes = false,
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

      <DivComponent>

        <FormComponent>

          <DivId ></DivId>

          <DivNome ></DivNome>

          <DivEntrada ></DivEntrada>

          <DivData ></DivData>

          <DivValor ></DivValor>

          <DivDescricao ></DivDescricao>

          <DivEstorno ></DivEstorno>

        </FormComponent>

        <DivButtons>
          <DivButton>
            <Button style={{ background: "blue" }}>Salvar</Button>
          </DivButton>
          <DivButton>
            <Button>Cancelar</Button>
          </DivButton>
        </DivButtons>

      </DivComponent>



    </TelasFlutuantes>
  )
};

export default EditMovimentacoes;





