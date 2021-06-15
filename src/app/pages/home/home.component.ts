import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NewsModel} from '../../models/news.model';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  news$: Observable<Array<NewsModel>>;

  constructor(private newsService: NewsService) {
    this.news$ = this.newsService.entities$;
  }

  ngOnInit(): void {
    this.newsService.getAll().subscribe();
  }
}
