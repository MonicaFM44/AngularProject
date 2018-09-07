import { Component, OnInit, Input } from '@angular/core';
import { INew } from '../../INew';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  @Input() news: INew[] = [];
}
