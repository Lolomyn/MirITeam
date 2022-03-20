import {Injectable} from '@angular/core';
// import {Http, Response} from '@angular/http';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';
import {catchError, tap , map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http';
import {HttpErrorHandler } from 'src/http-error-handler.service';
// import { MessageService } from 'src/message.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
    // private messageService: MessageService,
    private httperrorhandler:HttpErrorHandler
    ) {
  }
  
  getUserByLogin(email: string): Observable<User>{
    const url = environment.apiHost + `?email=${email}`; 
    return this.http.get<User>(url)
    .pipe(
    catchError(this.httperrorhandler.handleError<User>(`getuser id=${email}`))
    );
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(environment.apiHost, user)
    .pipe(
      catchError(this.httperrorhandler.handleError('addUser', user))
    );
  }


  deleteUserById(del: User | number): Observable<User> {
    const id = typeof del === 'number' ? del : del.id;
    const url = `${environment.apiHost}/${id}`;
    return this.http.delete<User>(url).pipe(
      catchError(this.httperrorhandler.handleError<User>('deleteUser'))
    );
  }



  updateUser(user: User): Observable<any> {
    const url = `${environment.apiHost}/${user.id}`;
    return this.http.put(url, user, httpOptions).pipe(
      catchError(this.httperrorhandler.handleError<any>('updateUser'))
    );
  }


}
