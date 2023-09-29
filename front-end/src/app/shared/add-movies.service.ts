import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { NewUserType } from 'src/utils/new-user-type';

@Injectable({
  providedIn: 'root',
})
export class AddMoviesService {
  constructor(private http: HttpClient) {}

  addToWatchlist(user: NewUserType, userId: any) {
    return this.http
      .put(`http://localhost:3000/usuarios/${userId}`, user)
      .pipe(take(1));
  }
}
