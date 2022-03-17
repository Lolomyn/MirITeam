import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, tap , map} from 'rxjs/operators';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import { HttpErrorHandler } from 'src/http-error-handler.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AddService {

constructor(
  private http: HttpClient,
  private httperrorhandler: HttpErrorHandler) {  }

  User(user: User): Observable<User> {
    return this.http.post<User>(environment.apiHost, user).pipe(
      tap((newUser: User) => this.httperrorhandler.log(`added user w/ id=${newUser.id}`)),
      catchError(this.httperrorhandler.handleError<User>('addUser'))
    );
  }
}

//////////////////

  // async Study(study: Studying) {
  //   const response = await this.http.post('http://localhost:3000/study', study)
  //     .toPromise();
  //   return response;
  //     }
  // async Theme(themes: ThemesModel) {
  //   const response = await this.http.post('http://localhost:3000/study', themes)
  //     .toPromise();
  //   return response;
  // }