import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {ProgramModel} from '../models/program.model';

@Injectable({providedIn: 'root'})
export class ProgramsService extends EntityCollectionServiceBase<ProgramModel> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Programas', serviceElementsFactory);
  }
}
