import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewsService } from './news.service';
import { NewsFavoritesComponent } from './components/news-favorites/news-favorites.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'news', component: AllNewsComponent },
      { path: 'news/:title', component: NewsDetailComponent },
      { path: 'favorites', component: NewsFavoritesComponent },
      { path: 'favorites/:title', component: NewsDetailComponent }
    ])
  ],
  declarations: [NewsListComponent, NewsDetailComponent, NewsFavoritesComponent, AllNewsComponent, FilterPipe],
  providers: [NewsService]
})
export class NewsModule {}
