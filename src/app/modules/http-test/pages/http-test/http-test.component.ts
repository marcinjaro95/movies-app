import { Component } from '@angular/core';
import {HttpMoviesService} from "../../../../core/services/http-movies.service";
import {Movie} from "../../../../core/models/movie";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent {
  errorMessage: string = '';
  counter: number = 0;

  constructor(private http: HttpMoviesService) { }

  get() {
    this.http.getMovies().subscribe(this.handleError());
  }

  post() {
    const movie: Movie =  {
      country: "Poland",
      director: "Marek Brodzki",
      category: "Fantasy",
      plot: "The monster slayer in action.",
      year: "2001",
      title: "Wiedźmin",
      imdbRating: "9.3"
    }
    this.http.postMovie(movie).subscribe(this.handleError());
  }

  put() {
    const movie: Movie =  {
      id: '53',
      country: "Poland",
      director: "Marek Brodzki",
      category: "Fantasy",
      plot: "The monster slayer in action.",
      year: "2001",
      title: "Wiedźmin",
      imdbRating: "9.3"
    }
    this.http.putMovie(movie).subscribe(this.handleError());
  }

  patch() {
    const movie: Partial<Movie> =  {
      id: '52',
      country: "Poland",
      imdbRating: "9.3",
      title: "Cobra Kai"
    }
    this.http.patchMovie(movie).subscribe(this.handleError());
  }

  delete() {
    this.http.deleteMovie('54').subscribe(this.handleError());
  }

  error() {
    this.http.makeError().subscribe(this.handleError());
  }

  handleError() {
    return {
      error: (err: string) => {
        this.errorMessage = err;
        this.clearMessage();
      }
    }
  }

  clearMessage() {
    const interval = setInterval(() => {
      this.counter++;
      if (this.counter >= 5) {
        this.errorMessage = '';
        clearInterval(interval);
      }
    }, 1000);
  }

}
