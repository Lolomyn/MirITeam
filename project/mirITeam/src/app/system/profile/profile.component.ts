import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AddService } from '../shared/services/add.service';
import { StudyingService } from '../shared/services/studying.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  file: File = null;
  loading: boolean = false;
  shortLink: string = "";
  user: User;
  userr: User[] = [];

  edituser_main: User | undefined;
  edituser_add: User | undefined;
  edituser_study: User | undefined;

  constructor(
    private addService: AddService, 
    private studyingService: StudyingService, 
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.getUser();
  }

  getUser(): void {
    this.studyingService.getUser()
      .subscribe(user => (this.userr = user));
  }

  editMain(userr: User) {
    this.edituser_main = userr;
  }

  editAdd(userr: User) {
    this.edituser_add = userr;
  }

  editStudy(userr: User) {
    this.edituser_study = userr;
  }

  updateMain() {
    this.usersService
      .updateUser(this.edituser_main)
      .subscribe(userr => {
      const ix = userr ? this.userr.findIndex(u => u.id === userr.id) : -1;
      if (ix > -1) {
        this.userr[ix] = userr;
      }
    });
    this.edituser_main = undefined;
  }

  updateAdd() {
    this.usersService
      .updateUser(this.edituser_add)
      .subscribe(userr => {
      const ix = userr ? this.userr.findIndex(u => u.id === userr.id) : -1;
      if (ix > -1) {
        this.userr[ix] = userr;
      }
    });
    this.edituser_add = undefined;
  }

  updateStudy() {
    this.usersService
      .updateUser(this.edituser_study)
      .subscribe(userr => {
      const ix = userr ? this.userr.findIndex(u => u.id === userr.id) : -1;
      if (ix > -1) {
        this.userr[ix] = userr;
      }
    });
    this.edituser_study = undefined;
  }

}