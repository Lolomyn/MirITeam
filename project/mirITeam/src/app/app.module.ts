import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpErrorHandler } from 'src/http-error-handler.service';
import { MessageService } from 'src/message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './system/shared/auth.service';
import { AuthGuard } from './system/shared/auth/auth.guard';
import { AddService } from './system/shared/services/add.service';
import { StudyingService } from './system/shared/services/studying.service';
import { UsersService } from './system/shared/services/users.service';
import { SystemComponent } from './system/system.component';
import { SystemModule } from './system/system.module';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    SystemModule
  ],
  providers: [UsersService, AuthService, AuthGuard, AddService, StudyingService, HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
