import { Component } from '@angular/core';
import { NewsService } from './news/news.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [NewsService]
})
export class AppComponent {
  readonly pageTitle: string = 'Latest news';
}
