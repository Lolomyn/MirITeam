import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-inst-manage',
  templateUrl: './inst-manage.component.html',
  styleUrls: ['./inst-manage.component.scss']
})
export class InstManageComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'));
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

}
