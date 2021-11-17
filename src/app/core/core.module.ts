import {NgModule} from "@angular/core";
import {HttpService} from "./services/http.service";
import {HttpMoviesService} from "./services/http-movies.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    HttpService,
    HttpMoviesService
  ]
})
export class CoreModule {}
