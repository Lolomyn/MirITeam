import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AddService } from '../shared/services/add.service';
import { StudyingService } from '../shared/services/studying.service';

@Component({
  selector: 'app-inst-manage',
  templateUrl: './inst-manage.component.html',
  styleUrls: ['./inst-manage.component.scss']
})
export class InstManageComponent implements OnInit {

  user: User;
  userr: User[] = [];
  constructor(
    private addService: AddService,
    private studyingService: StudyingService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  getUser(): void {
    this.studyingService.getUser()
      .subscribe(user => (this.userr = user));
  }

  x:any = 0;
  helpInfo() {
    let hidden_info = document.getElementsByClassName('check')[0] as HTMLElement;

    if (this.x == 0) {
      hidden_info.classList.add('unhidden-info');
      hidden_info.classList.remove('hidden_info');
      this.x = 1;
    } else {
      hidden_info.classList.add('hidden_info');
      hidden_info.classList.remove('unhidden_info');
      this.x = 0;
    }
  }


  // Это высчитывается только у одного юзера
  // подставить сюда БД достижений (параметр балла каждого достижения у одного юзера)
  getTotal() {
    let total = 0;
    for (var i = 0; i < this.userr.length; i++) {
        if (this.userr[i].avg) {
            total += Number(this.userr[i].avg);
        }
    }
    return total;
  }

  returnNumber() {
    return Number(this.user[0].avg);
  }

  getVoiceWeight() {
    return ((this.returnNumber() + this.getTotal())/10).toFixed(2);;
  }

}
