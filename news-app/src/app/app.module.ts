import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewsListComponent } from './news/components/news-list/news-list.component';
import { HomeComponent } from './news/components/home/home.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    NewsListComponent,
    HomeComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }