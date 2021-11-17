import {NgModule} from "@angular/core";
import {HttpTestComponent} from "./pages/http-test/http-test.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    HttpTestComponent
  ],
  imports: [
    SharedModule
  ]
})

export class HttpTestModule {}
