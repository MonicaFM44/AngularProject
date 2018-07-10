import { Injectable } from '@angular/core';
import { INew } from './INew';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class NewsService {
  private _newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + environment.apiKey;
  // './assets/news.json';
  // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + environment.apiKey;

  constructor(private _http: HttpClient) {}

  getNews(): Observable<INew[]> {
    return this._http.get(this._newsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), // tslint:disable-line
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

  /*private handleError(err: HttpErrorResponse) { 
        console.log(err.message);
        return Observable.throw(err.message);
    }*/
}
