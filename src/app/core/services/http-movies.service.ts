import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Movie} from "../models/movie";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {
  private url = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url).pipe(
      tap(console.log),
      catchError(HttpMoviesService.handleError)
    );
  }

  postMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.url, movie).pipe(
      tap(console.log),
      catchError(HttpMoviesService.handleError)
    );
  }

  putMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.url + '/' + movie.id, movie).pipe(
      tap(console.log),
      catchError(HttpMoviesService.handleError)
    );
  }

  patchMovie(movie: Partial<Movie>): Observable<Movie> {
    return this.http.patch<Movie>(this.url + '/' + movie.id, movie).pipe(
      tap(console.log),
      catchError(HttpMoviesService.handleError)
    );
  }

  deleteMovie(id: string): Observable<{}> {
    return this.http.delete<{}>(this.url + '/' + id).pipe(
      tap(console.log),
      catchError(HttpMoviesService.handleError)
    );
  }

  makeError(): Observable<HttpErrorResponse> {
    return this.http.delete<{}>(this.url + '/' + 999).pipe(
      tap(console.log),
      catchError(HttpMoviesService.handleError)
    );
  }

  private static handleError(error: HttpErrorResponse) {
    console.error(`
    Name: ${error.name}
    Error Message: ${error.message}
    Status: ${error.status}
    `)
    return throwError('Something went wrong. Please try again later.')
  }
}
