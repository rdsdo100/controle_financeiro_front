import { action } from 'typesafe-actions';
import { RepositoriesTypes, Auth } from './types';

export const loadAuthDelete = () => action(RepositoriesTypes.LOAD_DELETE);  // segundo parametro seria o payload

export const loadAuthSuccess = (auth: Auth) => action(RepositoriesTypes.LOAD_SUCCCES,  auth );  // segundo parametro seria o payload

