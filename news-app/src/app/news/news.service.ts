import { Injectable } from '@angular/core';
import { INew } from './INew';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class NewsService {
  private _newsUrl = './assets/news.json';
  //'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + environment.apiKey;

  constructor(private _http: HttpClient) {}

  getNews(): Observable<INew[]> {
    return this._http.get<INew[]>(this._newsUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
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
