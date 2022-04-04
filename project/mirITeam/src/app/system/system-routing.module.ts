import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AuthGuard} from './shared/auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { InstManageComponent } from './inst-manage/inst-manage.component';
import { NewsComponent } from './news/news.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RatingComponent } from './rating/rating.component';
import { SelfDevelopmentComponent } from './self-development/self-development.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'achievements', component: AchievementsComponent},
      {path: 'inst-manage', component: InstManageComponent},
      {path: 'news', component: NewsComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'rating', component: RatingComponent},
      {path: 'self-development', component: SelfDevelopmentComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
