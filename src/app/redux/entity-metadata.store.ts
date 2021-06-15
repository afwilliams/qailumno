import {EntityCollection, EntityMetadataMap} from '@ngrx/data';
import {RegisterModel} from '../models/register-model';
import {NewsModel} from '../models/news.model';
import {createSelector} from '@ngrx/store';

export const selectNewsModel = (entities: EntityCollection<NewsModel>) => entities.entities;

export const selectNewById = (id: string) => createSelector(
  selectNewsModel,
  entities => entities[id]
);

const pluralNames = {
  Noticias: 'Noticias',
  Programas: 'Programas',
  Registro: 'Registro',
};

export function registerById(model: RegisterModel): string {
  return model.email;
}

const entityMetadata: EntityMetadataMap = {
  Noticias: {},
  Programas: {},
  Registro: {
    selectId: registerById
  }
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
