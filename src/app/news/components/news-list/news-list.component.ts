import { Component, OnInit } from '@angular/core';
import { INew } from '../../INew';
import { NewsService } from '../../news.service';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  readonly pageTitle: string = 'News List';
  filteredNews: INew[];
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredNews = this.listFilter ? this.performFilter(this.listFilter) : this.news;
  }
  news: INew[] = [];

  constructor(private _newsService: NewsService) {}

  performFilter(filterBy: string): INew[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.news.filter((myNew: INew) => myNew.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this._newsService.getNews().subscribe(
      news => {
        this.news = news;
        this.filteredNews = this.news;
      },
      error => console.error(error)
    );
  }
}
