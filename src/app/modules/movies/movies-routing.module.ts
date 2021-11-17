import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {MoviesComponent} from "./pages/movies/movies.component";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class MoviesRoutingModule {}
