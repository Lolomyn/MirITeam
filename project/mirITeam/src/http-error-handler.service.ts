import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of,throwError } from 'rxjs';

import { MessageService } from './message.service';

@Injectable()
export class HttpErrorHandler {
  constructor(private messageService: MessageService) {
    
   }

  log(message: string) {
    this.messageService.add(`UsersService: ${message}`);
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}