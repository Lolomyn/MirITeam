import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AuthGuard} from './shared/auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'profile', component: ProfileComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
