import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { StudyingService } from '../services/studying.service';

@Component({ selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  user: User;
  userr: User[] = [];
  constructor (
    private authService: AuthService,
    private router: Router,
    private studyingService: StudyingService
  ) {}

  ngOnInit() {
    // this.user = JSON.parse(window.localStorage.getItem('user'));
    this.studyingService.getUser();
    // this.ShowMenu();
    // this.ShoMenu2();
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.getUser();
    // alert(location.href);
  }

  getUser(): void {
    this.studyingService.getUser()
      .subscribe(user => (this.userr = user));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/main']);
  }

  url = location.href;
  profile = "http://localhost:4200/system/profile";
  portfolio = "http://localhost:4200/system/portfolio";
  rating = "http://localhost:4200/system/rating";
  news = "http://localhost:4200/system/news";
  inst_manage = "http://localhost:4200/system/inst-manage";
  self_development = "http://localhost:4200/system/self-development";
  achievements = "http://localhost:4200/system/achievements";

  
// ShowMenu(){
//   var i;
//   var menu = document.querySelectorAll('.burger');
//  function ShowMenu2(){
//     if (this.classList.contains('m_active')) {
//       this.classList.remove('m_active');
//     } 
//     else
//     {
//       for (i = 0; i < menu.length; i++) {
//         menu[i].classList.remove('current');

//     }

//         this.classList.add('m_active');
//     }
//   }
//   for (i = 0; i < menu.length; i++) {
//     menu[i].addEventListener('click', ShowMenu2);
//   }
// }
// ShoMenu2(){
//   let page = document.querySelector('.sidebar');
// // let burger = document.querySelector('.burger')[0];
// let burger: HTMLElement = document.getElementsByClassName('burger')[0] as HTMLElement;

// burger.onclick = function() {
//   console.log('Кнопка нажата!');
//   if (page.classList.contains('is_active')) {
//     page.classList.remove('is_active');
//   } else {
//   page.classList.add('is_active');
//   }
// };
// }
}
