import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie";
import {HttpService} from "../../services/http.service";
import {HttpMoviesService} from "../../services/http-movies.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  model: Partial<Movie> = {};
  categories: string[] = [];
  years: string[] = [];

  constructor(private http: HttpService, private httpMoviesService: HttpMoviesService) { }

  ngOnInit(): void {
    this.http.getCategories().subscribe((categories) => this.categories = categories);
    this.http.getYears().subscribe((years) => this.years = years);
  }

  send() {
    console.log(this.model);
    this.httpMoviesService.postMovie(this.model as Movie).subscribe(
      result => result,
      error => console.error(error)
    );
  }

}
