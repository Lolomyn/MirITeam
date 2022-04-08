import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, tap , map} from 'rxjs/operators';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import { HttpErrorHandler } from 'src/http-error-handler.service';
import { environment } from 'src/environments/environment';
import { Achievement } from '../models/achievement.model';

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

  Achievement(achievement: Achievement): Observable<Achievement> {
    return this.http.post<Achievement>(environment.apiHost+"/achievements", achievement).pipe(
      tap((newAchievement: Achievement) => this.httperrorhandler.log(`added achievement w/ id=${newAchievement.id}`)),
      catchError(this.httperrorhandler.handleError<Achievement>('addAchievement'))
    );
  }


  upload(file):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post('http://localhost:8080/upload', formData)
}
}