import {NgModule} from "@angular/core";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {MoviesInCategoryComponent} from "./pages/movies-in-category/movies-in-category.component";
import {CategoriesRoutingModule} from "./categories-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CategoriesComponent,
    MoviesInCategoryComponent
  ],
  imports: [
    SharedModule
  ]
})

export class CategoriesModule {}
