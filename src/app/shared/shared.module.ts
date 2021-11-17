import {NgModule} from "@angular/core";
import {MovieCoverComponent} from "./movie-cover/movie-cover.component";
import {CommonModule} from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    MovieCoverComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MovieCoverComponent,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule {}
