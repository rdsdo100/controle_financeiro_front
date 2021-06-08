import React, { ChangeEvent } from 'react';
import Button from '../../buttons/Button';
import InputCadastro from '../../inputs/InputCadastro';
import TextArea from '../../inputs/TextArea';
import Toggle from '../../inputs/Toggle';
import TelasFlutuantes from '../../TelasFlutuantes';
import {
  DivButton, DivButtons, DivComponent, FormComponent, DivId,
  DivNome, DivData, DivDescricao, DivEntrada, DivEstorno, DivValor, DivLinha
} from './styles';

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

        <FormComponent style={{height: "calc(60vh - 50px)"}}>


          <DivLinha>
            <DivEntrada >
              <strong>Entrada?</strong><Toggle></Toggle>
            </DivEntrada>
            <DivEstorno >
              <button>Estorno</button>
            </DivEstorno>


          </DivLinha>
          <DivLinha>
            <DivId >

              <InputCadastro>Id</InputCadastro>

            </DivId>

            <DivNome >
              <InputCadastro>Nome</InputCadastro>
            </DivNome>
          </DivLinha>
          <DivLinha>

            <DivValor >
              <InputCadastro>Valor</InputCadastro>
            </DivValor>
            <DivData >
              <InputCadastro>Data</InputCadastro>
            </DivData>


          </DivLinha>
          <DivDescricao >
            <TextArea altura= {"200px"} placeholDerDescricao={"Descrição"} ></TextArea>
          </DivDescricao>



        </FormComponent>

        <DivButtons>
          <DivButton>
            <Button style={{ background: "blue" }}>Salvar</Button>
          </DivButton>
          <DivButton>
            <Button onClick ={buttonFechar}>Cancelar</Button>
          </DivButton>
        </DivButtons>

      </DivComponent>



    </TelasFlutuantes>
  )
};

export default EditMovimentacoes;





