import { Component, OnInit } from '@angular/core';
import { Achievement } from '../shared/models/achievement.model';
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

  achievement: Achievement[] = [];
  constructor(
    private addService: AddService,
    private studyingService: StudyingService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getAchievement();
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  getUser(): void {
    this.studyingService.getUser()
      .subscribe(user => (this.userr = user));
  }

  getAchievement(): void {
    this.studyingService.getAchievement()
      .subscribe(achievement => (this.achievement = achievement));
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

  getTotal(index) {
    let total = 0;
    let username = document.getElementsByClassName('hidden')[0] as HTMLElement;
    for (var i = 0; i < this.achievement.length; i++) {
        if (this.achievement[i].ball && this.achievement[i].fcs == this.userr[index].fcs) {
            total += Number(this.achievement[i].ball);
        }
    }
    return total;
  }

  returnNumber() {
    return Number(this.user[0].avg);
  }

  getVoiceWeight(index) {
    return ((this.returnNumber() + this.getTotal(index))/10).toFixed(2);;
  }

}
