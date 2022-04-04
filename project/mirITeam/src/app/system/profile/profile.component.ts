import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AddService } from '../shared/services/add.service';

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
  constructor(
    private addService: AddService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    if (this.file === null) {
      alert("Файл не выбран!");
    } else {
      this.loading = !this.loading;
      console.log(this.file);
      this.addService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {
                // Short link via api response
                this.shortLink = event.link;
                this.loading = false; // Flag variable 
            }
        }
      );
      alert("Файл успешно загружен!");
    }
  }

  edit() {
    alert("Сделать редактирование");
  }
}