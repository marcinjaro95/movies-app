import {RouterModule, Routes} from "@angular/router";
import {YearsComponent} from "./pages/years/years.component";
import {MoviesInYearsComponent} from "./movies-in-years/movies-in-years.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'years',
    component: YearsComponent,
    children: [
      { path: ':year', component: MoviesInYearsComponent }
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

export class YearsRoutingModule {}
