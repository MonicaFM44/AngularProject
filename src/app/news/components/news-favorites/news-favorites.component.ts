import { Component, OnInit } from '@angular/core';
import { INew } from '../../INew';
import { NewsService } from '../../news.service';

@Component({
  selector: 'news-favorites',
  templateUrl: './news-favorites.component.html',
  styleUrls: ['./news-favorites.component.scss']
})
export class NewsFavoritesComponent implements OnInit {
  readonly pageTitle: string = 'News favorites';
  filteredNews: INew[];
  _favoritesFilter: string;
  get favoritesFilter(): string {
    return this._favoritesFilter;
  }
  set favoritesFilter(value: string) {
    this._favoritesFilter = value;
    this.filteredNews = this.favoritesFilter ? this.performFilter(this.favoritesFilter) : this.news;
  }
  news: INew[] = [];

  constructor(private _newsService: NewsService) {}

  performFilter(filterBy: string): INew[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.news.filter((myNew: INew) => myNew.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this._newsService.getFavorites().subscribe(
      news => {
        this.news = news;
        this.filteredNews = this.news;
      },
      error => console.error(error)
    );
  }
}
