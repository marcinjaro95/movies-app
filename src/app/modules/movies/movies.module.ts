import {NgModule} from "@angular/core";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import {SharedModule} from "../../shared/shared.module";
import {MoviesRoutingModule} from "./movies-routing.module";

@NgModule({
  declarations: [
    MovieDetailsComponent,
    MoviesComponent
  ],
  imports: [
    SharedModule,
  ]
})

export class MoviesModule {}
