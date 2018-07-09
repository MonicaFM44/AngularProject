import { Component } from "@angular/core";
import { INew } from "../../new";


@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
    pageTitle: string = 'News List';
    filteredNews: INew[];
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredNews= this.filteredNews = this.listFilter ? this.performFilter(this.listFilter) : this.news;
    }
    
    news: INew[] = [
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

    constructor() {
        this.filteredNews= this.news;
    }

    performFilter(filterBy: string): INew[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.news.filter( (myNew: INew) => 
            myNew.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}