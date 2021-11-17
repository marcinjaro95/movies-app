import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../core/services/http.service';
import { Movie } from '../../../../core/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]> | undefined;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.movies = this.http.getMovies();
  }
}