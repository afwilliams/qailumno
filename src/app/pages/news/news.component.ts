import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {select} from '@ngrx/store';

import {NewsService} from '../../services/news.service';
import {NewsModel} from '../../models/news.model';

import {selectNewById} from '../../redux/entity-metadata.store';

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['./news.component.sass']
})

export class NewsComponent implements OnInit, OnDestroy {

  subscription$: Subscription;
  news: NewsModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService) {
    this.news = new NewsModel();
  }


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          if (params && params.id) {
            this.subscription$ = this.newsService.collection$
              .pipe(select(selectNewById(params.id)))
              .subscribe((news: NewsModel) => this.news = news);
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }


}
