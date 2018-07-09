import { Component } from "@angular/core";
import { INew } from "../../new";
import { NewsService } from "../../news.service";


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
    news: INew[] = [];

    constructor(private _newsService: NewsService) {
    }

    performFilter(filterBy: string): INew[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.news.filter( (myNew: INew) => 
            myNew.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this.news = this._newsService.getNews();
        this.filteredNews = this.news;
        //6d7a5b2927e448debfa6dde2b2a4d7bf
    }
}