import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./modules/page-not-found/page-not-found.component";
import {HttpTestComponent} from "./modules/http-test/pages/http-test/http-test.component";
import {AddMovieComponent} from "./modules/add-movie/pages/add-movie/add-movie.component";

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'http-test', component: HttpTestComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

