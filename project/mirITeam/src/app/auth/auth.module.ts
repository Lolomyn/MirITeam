import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthComponent} from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../system/shared/shared.module';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from '../system/shared/component/sidebar.component';
import { RegistrationComponent } from './registration/registration.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    MainComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TextMaskModule
  ]

})
export class AuthModule { }
