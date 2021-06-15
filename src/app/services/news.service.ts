import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

import {NewsModel} from '../models/news.model';

@Injectable({providedIn: 'root'})
export class NewsService extends EntityCollectionServiceBase<NewsModel> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Noticias', serviceElementsFactory);
  }
  }
