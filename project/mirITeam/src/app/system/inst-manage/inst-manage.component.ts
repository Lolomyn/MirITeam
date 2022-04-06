import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inst-manage',
  templateUrl: './inst-manage.component.html',
  styleUrls: ['./inst-manage.component.scss']
})
export class InstManageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
