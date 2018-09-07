import { Component, OnInit } from '@angular/core';
import { INew } from '../../INew';
import { NewsService } from '../../news.service';

@Component({
  selector: 'news-list',
  templateUrl: './../news-list/news-list.component.html',
  styleUrls: ['./../news-list/news-list.component.scss']
})
export class NewsFavoritesComponent implements OnInit {
  readonly pageTitle: string = 'News favorites';
  public routerLinkVariable = '/favorites';

  news: INew[] = [];
  isFavorites: boolean = true;

  constructor(private _newsService: NewsService) {}

  ngOnInit(): void {
    this._newsService.getFavorites().subscribe(
      news => {
        this.news = news;
      },
      error => console.error(error)
    );
  }
}
