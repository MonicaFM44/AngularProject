import { Injectable } from '@angular/core';
import { INew } from './INew';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class NewsService {
  private _newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + environment.apiKey;

  constructor(private _http: HttpClient) {}

  getNews(): Observable<INew[]> {
    return this._http.get(this._newsUrl).pipe(
      map((data: any) => {
        return data.articles.map(article => ({
          title: article.title,
          description: article.description,
          source: article.source.name,
          author: article.author,
          date: article.publishedAt,
          url: article.url,
          urlImage: article.urlToImage
        }));
      }),
      catchError((err: HttpErrorResponse) => {
        throw err;
      })
    );
  }

  getArticle(title: string): Observable<INew> {
    return this.getNews().pipe(map((news: INew[]) => news.find(article => article.title === title)));
  }
}
