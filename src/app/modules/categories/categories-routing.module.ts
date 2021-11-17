import {RouterModule, Routes} from "@angular/router";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {MoviesInCategoryComponent} from "./pages/movies-in-category/movies-in-category.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      { path: ':category', component: MoviesInCategoryComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule {}
