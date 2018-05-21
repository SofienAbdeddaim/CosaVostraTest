import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { ArticlesComponent } from './articles/articles.component';
import {PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import { ArticleComponent } from './articles/article/article.component';
import { ScrollEventModule } from 'ngx-scroll-event';
import { RegisterComponent } from './register/register.component';
import {AuthService} from "./AuthService";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  // that's in case we want change the scroll style
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ArticlesComponent,
    ArticleComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PerfectScrollbarModule,
    ScrollEventModule
  ],
  providers: [
    AuthService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
