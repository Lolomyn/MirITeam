import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthComponent} from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../system/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]

})
export class AuthModule { }
