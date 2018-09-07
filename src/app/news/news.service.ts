import { Injectable } from '@angular/core';
import { INew } from './INew';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class NewsService {
  private _newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + environment.apiKey;
  private _apiUrl = 'http://localhost:8000/api/favorites';
  newsCache: INew[];

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
          urlImage: article.urlToImage,
          saved: false
        }));
      }),
      tap((data: INew[]) => (this.newsCache = data)),
      catchError((err: HttpErrorResponse) => {
        throw err;
      })
    );
  }

  getArticle(title: string): Observable<INew> {
    const myArt: INew = this.newsCache ? this.newsCache.find(article => article.title === title) : null;
    if (myArt) {
      return of(myArt);
    }
    return this.getNews().pipe(map((news: INew[]) => news.find(article => article.title === title)));
  }

  saveArticle(article: INew) {
    this._http.post(this._apiUrl, article);
  }

  getFavorites(): Observable<INew[]> {
    return this._http.get<INew[]>(this._apiUrl);
  }

  getOneFavorite(title: string): Observable<INew> {
    const newTitle = title.replace(/ /g, '%20');
    return this._http.get<INew>(this._apiUrl + '/' + newTitle);
  }
}
