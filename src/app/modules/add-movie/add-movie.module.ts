import {NgModule} from "@angular/core";
import {AddMovieComponent} from "./pages/add-movie/add-movie.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    AddMovieComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
  ]
})

export class AddMovieModule {}
