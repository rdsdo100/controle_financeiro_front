/*
* Actions Types
* define as acoes dentro do modulo do redux
* */
export enum RotaTypes {
  LOAD_CARREGAR_ROTAS = '@repositories/LOAD_CARREGAR_ROTAS',
  LOAD_DELETE_ROTAS = '@repositories/LOAD_DELETE_ROTAS',

}

/*
* Data Types
*
* formato da finformação que estara dentro do reducer
* */

export interface Rotas {
  id: number
  nomeRota: string
  caminhoRota: string
}

/*
state types
 formato do estado estado que sera armazenado pelo reducer
*/
export interface RotasState {
  readonly data: Rotas[]
}
