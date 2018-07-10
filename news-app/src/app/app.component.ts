import { Component } from '@angular/core';
import { NewsService } from './news/news.service';

@Component({
  selector: 'my-app',
  template: `<home></home>` /* cambiar a router-outlet más adelante al mirar las rutas */,
  providers: [NewsService]
})
export class AppComponent {}
