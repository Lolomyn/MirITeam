import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './shared/component/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './shared/component/sidebar.component';
import { FooterComponent } from './shared/component/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, ProfileComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule, SharedModule, SystemRoutingModule
  ]
})
export class SystemModule { }
