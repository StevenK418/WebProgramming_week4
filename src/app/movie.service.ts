import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList =
  [
    {title: 'The Godfather', year: '1972', director: 'Francis Ford Coppola'},
    {title: 'Millers Crossing', year: '1990', director: 'The Coen Brothers'},
    {title: 'Dial M for Murder', year: '1954', director: 'Alfred Hitchcock'},
    {title: 'Whiplash', year: '2014', director: 'Damien Chazelle'}
  ];

  getMovies()
  {
    return this.movieList;
  }

  addMovie(movieTitle:string, moviedirector:string, movieyear:string)
  {
    this.movieList.push({title:movieTitle, director:moviedirector, year:movieyear});
  }

  ngOnInit()
  {

  }
}
