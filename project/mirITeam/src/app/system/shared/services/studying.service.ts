import {Injectable} from '@angular/core';
// import {Studying} from '../models/studying';
// import {AddUserModel} from '../models/adduser.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../models/user.model';
import { Achievement } from '../models/achievement.model';
// import {Http, Response} from '@angular/http';
// import {ThemesModel} from '../models/themes.model';
import { HttpErrorHandler } from 'src/http-error-handler.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudyingService {
  constructor(private http: HttpClient,
  private httperrorhandler:HttpErrorHandler) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiHost)
    .pipe(
      catchError(this.httperrorhandler.handleError('getUsers', []))
    );
  }
  getAchievement(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(environment.apiHost + "/achievements")
    .pipe(
      catchError(this.httperrorhandler.handleError('getAchievements', []))
    );
  }

  getUserById(id: number): Observable<User> {
    const url = `${environment.apiHost}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.httperrorhandler.handleError<User>(`getUser id=${id}`))
    );
  }



  // getUserFirstLogin(): Observable<User[]>{
  //   const url = 'http://localhost:8080/api/users';
  //   return this.http.get<User[]>(url)
  //   .pipe(
  //     catchError(this.httperrorhandler.handleError('getUsers', []))
  //   );
  // }
}
