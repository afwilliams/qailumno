import {DefaultDataServiceConfig} from '@ngrx/data';
import {environment} from '../../environments/environment';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
  timeout: 3000, // request timeout
};
