import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {RegisterModel} from '../models/register-model';

@Injectable({providedIn: 'root'})
export class RegisterService extends EntityCollectionServiceBase<RegisterModel> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Registro', serviceElementsFactory);
  }
}
