import {NgModule} from "@angular/core";
import {YearsComponent} from "./pages/years/years.component";
import {MoviesInYearsComponent} from "./movies-in-years/movies-in-years.component";
import {SharedModule} from "../../shared/shared.module";
import {YearsRoutingModule} from "./years-routing.module";

@NgModule({
  declarations: [
    YearsComponent,
    MoviesInYearsComponent
  ],
  imports: [
    SharedModule,
  ]
})

export class YearsModule {}
