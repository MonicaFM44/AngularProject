import { Injectable } from '@angular/core';
import { INew } from './new';

@Injectable()
export class NewsService {
    getNews(): INew[] {
        return  [
            {
                "id": 1,
                "title": "asdasd",
                "source": "asdasd",
                "author": "asdasd", 
                "date": "2018-07-06"
            },
            {
                "id": 2,
                "title": "asdasd",
                "source": "asdasd",
                "author": "asdasd", 
                "date": "2018-07-07"
            }
        ];
    }
}
