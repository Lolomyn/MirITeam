import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './shared/component/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './shared/component/sidebar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { RatingComponent } from './rating/rating.component';
import { NewsComponent } from './news/news.component';
import { InstManageComponent } from './inst-manage/inst-manage.component';
import { SelfDevelopmentComponent } from './self-development/self-development.component';



@NgModule({
  declarations: [HeaderComponent, ProfileComponent, SidebarComponent, FooterComponent, PortfolioComponent, AchievementsComponent, RatingComponent, NewsComponent, InstManageComponent, SelfDevelopmentComponent],
  imports: [
    CommonModule, SharedModule, SystemRoutingModule
  ]
})
export class SystemModule { }
