import { Component, OnInit, Input } from '@angular/core';
import { INew } from '../../INew';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  readonly pageTitle: string = 'News List';

  @Input() news: INew[] = [];

  ngOnInit(): void {}

  save(article) {
    // this._newsService.saveArticle(article);
    article.saved = true;
  }
}
