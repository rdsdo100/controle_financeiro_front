/*
* Actions Types
* define as acoes dentro do modulo do redux
* */
export enum RepositoriesTypes {
  LOAD_DELETE = '@repositories/LOAD_DELETE',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
}

/*
* Data Types
*
* formato da finformação que estara dentro do reducer
* */

export interface Auth {
  name: string
}

/*
state types
 formato do estado estado que sera armazenado pelo reducer
*/
export interface AuthState {
  readonly auth: string
}
