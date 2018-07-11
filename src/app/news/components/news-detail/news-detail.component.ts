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

  constructor(private _route: ActivatedRoute, private _router: Router, private _newsService: NewsService) {}

  ngOnInit(): void {
    const title = this._route.snapshot.paramMap.get('title');
    if (title) {
      this.getArticle(title);
    }
    this.pageTitle = title;
  }

  getArticle(title: string) {
    this._newsService.getArticle(title).subscribe(data1 => (this.article = data1), error => console.error(error));
  }

  onBack(): void {
    this._router.navigate(['/news']);
  }
}
