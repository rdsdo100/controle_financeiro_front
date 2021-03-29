import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);  // segundo parametro seria o payload

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCCES, { data });  // segundo parametro seria o payload

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);  // segundo parametro seria o payload
