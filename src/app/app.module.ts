import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { AppRoutingModule } from "./app-routing-module";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {CoreModule} from "./core/core.module";
import {AddMovieModule} from "./modules/add-movie/add-movie.module";
import {CategoriesModule} from "./modules/categories/categories.module";
import {HttpTestModule} from "./modules/http-test/http-test.module";
import {MoviesModule} from "./modules/movies/movies.module";
import {YearsModule} from "./modules/years/years.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    AddMovieModule,
    CategoriesModule,
    HttpTestModule,
    MoviesModule,
    YearsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
