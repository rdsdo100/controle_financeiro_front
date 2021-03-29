/*
* Actions Types
* define as acoes dentro do modulo do redux
* */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/*
* Data Types
*
* formato da finformação que estara dentro do reducer
* */

export interface Repository {
  id: number
  name: string
}

/*
state types
 formato do estado estado que sera armazenado pelo reducer
*/
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}
