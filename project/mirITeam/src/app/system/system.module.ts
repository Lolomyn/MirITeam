import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './shared/component/header.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [HeaderComponent, ProfileComponent],
  imports: [
    CommonModule, SharedModule, SystemRoutingModule
  ]
})
export class SystemModule { }
