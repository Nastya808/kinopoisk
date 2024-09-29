import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'd88ff883'; 
  private apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  searchMovie(movieTitle: string): Observable<any> {
    const url = `${this.apiUrl}&t=${encodeURIComponent(movieTitle)}`;
    return this.http.get(url); 
  }
}
