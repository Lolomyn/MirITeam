import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({ selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  toPortfolio() {
    let menuItem = document.querySelectorAll('.current');
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('current');
    }

    let current_link = document.getElementsByClassName('portfolio')[0] as HTMLElement;
    current_link.classList.add('current');

    this.router.navigate(['/system/portfolio']);
  }

  toAchievements() {
    let menuItem = document.querySelectorAll('.current');
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('current');
    }

    let current_link = document.getElementsByClassName('achievements')[0] as HTMLElement;
    current_link.classList.add('current');

    this.router.navigate(['/system/achievements']);
  }

  toInstManage() {
    let menuItem = document.querySelectorAll('.current');
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('current');
    }

    let current_link = document.getElementsByClassName('inst-manage')[0] as HTMLElement;
    current_link.classList.add('current');

    this.router.navigate(['/system/inst-manage']);
  }

  toNews() {
    let menuItem = document.querySelectorAll('.current');
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('current');
    }

    let current_link = document.getElementsByClassName('news')[0] as HTMLElement;
    current_link.classList.add('current');

    this.router.navigate(['/system/news']);
  }

  toProfile() {
    let menuItem = document.querySelectorAll('.current');
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('current');
    }

    let current_link = document.getElementsByClassName('profile')[0] as HTMLElement;
    current_link.classList.add('current');

    this.router.navigate(['/system/profile']);
  }

  toRating() {
    let menuItem = document.querySelectorAll('.current');
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('current');
    }

    let current_link = document.getElementsByClassName('rating')[0] as HTMLElement;
    current_link.classList.add('current');

    this.router.navigate(['/system/rating']);
  }

  toSelfDevelopment() {
    let menuItem = document.querySelectorAll('.current');
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('current');
    }

    let current_link = document.getElementsByClassName('self-development')[0] as HTMLElement;
    current_link.classList.add('current');

    this.router.navigate(['/system/self-development']);
  }
}
