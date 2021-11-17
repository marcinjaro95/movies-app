import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../../core/services/http.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Movie} from "../../../core/models/movie";

@Component({
  selector: 'app-movies-in-years',
  templateUrl: './movies-in-years.component.html',
  styleUrls: ['./movies-in-years.component.css']
})
export class MoviesInYearsComponent implements OnInit {
  movies: Observable<Movie[]> | undefined;
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.http.getMoviesFromYear(params.get('year'))))
  }

}
