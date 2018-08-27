import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsFavoritesComponent } from './components/news-favorites/news-favorites.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewsService } from './news.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'news', component: NewsListComponent },
      { path: 'news/:title', component: NewsDetailComponent },
      { path: 'favorites', component: NewsFavoritesComponent }
    ])
  ],
  declarations: [NewsListComponent, NewsDetailComponent, NewsFavoritesComponent],
  providers: [NewsService]
})
export class NewsModule {}
