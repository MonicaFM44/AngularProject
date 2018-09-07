import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { INew } from '../../INew';
import { NewsService } from '../../news.service';

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  pageTitle: string;
  article: INew;
  root: string = this._route.snapshot.url[0].path;

  constructor(private _route: ActivatedRoute, private _router: Router, private _newsService: NewsService) {}

  ngOnInit(): void {
    const title = this._route.snapshot.paramMap.get('title');
    if (title) {
      this.getArticle(title);
    }
    this.pageTitle = title;
  }

  getArticle(title: string) {
    if (this.root === 'news') {
      this._newsService
        .getArticle(title)
        .subscribe(article => ((this.article = article), error => console.error(error)));
    } else {
      this._newsService
        .getOneFavorite(title)
        .subscribe(article => ((this.article = article[0]), error => console.error(error)));
    }
  }

  onBack(): void {
    if (this.root === 'news') {
      this._router.navigate(['/news']);
    } else {
      this._router.navigate(['/favorites']);
    }
  }
}
