import { Component, Input, OnInit } from '@angular/core';
import { AddNewUserService } from '../../shared/add-new-user.service';
import { ActivatedRoute } from '@angular/router';
import { GetUsersService } from '../../shared/get-users.service';
import { NewUserType } from 'src/utils/new-user-type';
import { AddMoviesService } from '../../shared/add-movies.service';
import { GetMoviesService } from '../../shared/get-movies.service';
import { DataService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  allUsers!: NewUserType[];
  currentUser!: NewUserType;
  id!: any;
  watchlistMovies!: any;
  newMovie: any;
  userName: any;

  constructor(
    private route: ActivatedRoute,
    private service: GetUsersService,
    private serviceAddMovies: AddMoviesService,
    private serviceGetMovies: GetMoviesService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Pega o id do usuário atual pelo parâmetro do URL
    this.id = this.dataService.getUserId();

    // Retorna o objeto do usuário atual
    this.service.getUsers().subscribe((data: any) => {
      this.allUsers = data;
      this.currentUser = this.allUsers.filter(
        (u: NewUserType) => u.id == this.id
      )[0];
      this.userName = this.currentUser?.nome;
    });
    // }
    // );
  }

  // getUserWatchlist() {
  //   this.serviceGetMovies.getUserWatchlist(this.id).subscribe();
  // }

  addMovieInWatchlist(movie: any) {
    if (!this.currentUser.watchlist.some((m) => m.id === movie.id)) {
      this.currentUser.watchlist?.push(movie);
      this.serviceAddMovies.addMovie(this.currentUser, this.id).subscribe();
    }
  }

  addMovieInFavorites(movie: any) {
    if (!this.currentUser.favorites.some((m) => m.id === movie.id)) {
      this.currentUser.favorites?.push(movie);
      this.serviceAddMovies.addMovie(this.currentUser, this.id).subscribe();
    }
  }

  listenEmitter(event: any) {
    this.newMovie = event;
  }

  updateUser(event: any) {
    this.currentUser = event;
  }
}
