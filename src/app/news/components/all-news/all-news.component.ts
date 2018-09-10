import { Component, OnInit } from '@angular/core';
import { INew } from '../../INew';
import { NewsService } from '../../news.service';

@Component({
  selector: 'news-list',
  templateUrl: './../news-list/news-list.component.html',
  styleUrls: ['./../news-list/news-list.component.scss']
})
export class AllNewsComponent implements OnInit {
  readonly pageTitle: string = 'News List';
  public routerLinkVariable = '/news';

  news: INew[] = [];

  constructor(private _newsService: NewsService) {}

  ngOnInit(): void {
    this._newsService.getNews().subscribe(news => (this.news = news), error => console.error(error));
  }

  save(article: INew) {
    article.saved = true;
    this._newsService.saveArticle(article).subscribe(res => res, error => console.error(error));
  }
}
