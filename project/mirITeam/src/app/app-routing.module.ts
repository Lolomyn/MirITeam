import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'main', pathMatch: 'full' 
  }
  //   {
  //     path: 'system/admin',
  //     component: AdminPageComponent,
  //     canActivate: [AuthGuard],
  //     data: { type: 'admin' }
  // },
  // {path: 'system/canvas', component: Canvas1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
