import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  imports: [FormsModule, CommonModule]
})
export class MovieSearchComponent {
  movieTitle: string = '';
  movie: any;
  errorMessage: string | null = null; 

  constructor(private movieService: MovieService) {}

  searchMovie() {
    this.movieService.searchMovie(this.movieTitle).subscribe(
      (data) => {
        if (data.Response === 'True') {
          this.movie = data;
          this.errorMessage = null; 
        } else {
          this.movie = null;
          this.errorMessage = 'Фильм не найден. Попробуйте другое название.';
        }
      },
      (error) => {
        console.error('Error fetching movie data', error);
        this.movie = null;
        this.errorMessage = 'Произошла ошибка при получении данных. Попробуйте позже.';
      }
    );
  }
}
