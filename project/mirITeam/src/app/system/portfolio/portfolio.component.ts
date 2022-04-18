import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AddService } from '../shared/services/add.service';
import { StudyingService } from '../shared/services/studying.service';
import * as XLSX from 'xlsx';
import { AnyForUntypedForms, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../shared/services/users.service';
import { Achievement } from '../shared/models/achievement.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  file: File = null;
  loading: boolean = false;
  shortLink: string = "";
  user: User;
  userr: User[] = [];
  achievement: Achievement[] = [];

  checkedIDs = [];
  selectedAll: any;

  form: FormGroup;
  edit_achievement: Achievement | undefined;
  
  constructor(
    private addService: AddService,
    private studyingService: StudyingService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getAchievement();
    this.form = new FormGroup({ 
      name: new FormControl(null, [Validators.required]),
      organizator: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      file: new FormControl(null, [Validators.required])
    });
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  edit(achievement: Achievement) {
    this.edit_achievement = achievement;
  }

  update() {
    this.usersService
      .updateAchievement(this.edit_achievement)
      .subscribe(userr => {
      const ix = userr ? this.userr.findIndex(u => u.id === userr.id) : -1;
      if (ix > -1) {
        this.userr[ix] = userr;
      }
    });
    this.edit_achievement = undefined;
  }
  
  getUser(): void {
    this.studyingService.getUser()
      .subscribe(user => (this.userr = user));
  }

  getAchievement(): void {
    this.studyingService.getAchievement()
      .subscribe(achievement => (this.achievement = achievement));
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

  add(name: any, status: any, organizator:any, stepen: any, date:any, file:any) {
    var ball = 0;
    var fcs = (document.getElementsByClassName('hidden')[0] as HTMLElement).innerHTML;
    if (status == "Муниципальный") {
      if (stepen == "Победитель") ball = 3;
      else if (stepen == "Призёр") ball = 2;
      else if (stepen == "Участник") ball = 1;
      else if (stepen == "Дипломант") ball = 0.5;
    } else if (status == "Областной") {
      if (stepen == "Победитель") ball = 4;
      else if (stepen == "Призёр") ball = 3;
      else if (stepen == "Участник") ball = 2;
      else if (stepen == "Дипломант") ball = 1;
    } else if (status == "Всероссийский") {
      if (stepen == "Победитель") ball = 5;
      else if (stepen == "Призёр") ball = 4;
      else if (stepen == "Участник") ball = 3;
      else if (stepen == "Дипломант") ball = 2;
    }

    date = date.slice(0,10);
    this.addService.Achievement({fcs, name, status, organizator, stepen, ball, date, file} as Achievement)
      .subscribe(achievement => {
        this.achievement.push(achievement);
      });

    ball = 0; 

    alert("Достижение добавлено!");
    setTimeout(function(){
      location.reload();
    }, 2000);
  }

  myFunction() {
    var input, filter, table, tr, td_comment, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable_list");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td_comment = tr[i].getElementsByTagName("td")[1];
      if (td_comment) {
        txtValue = td_comment.textContent || td_comment.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  doit(type) {
    var elt = document.getElementById('myTable_list');
    var wb = XLSX.utils.table_to_book(elt);
    var fn = "users_list.";
    // return dl ?
    //   XLSX.write(wb, {bookType:type, bookSST:true, type: 'base64'}) :
    XLSX.writeFile(wb, fn + (type));
  }

  moveCheckedIDs() {
    var counter = 0;
    this.achievement.forEach((value, index) => {
      if (value.isChecked) {
        counter++;
      }
    });

    if (counter != 0) {
      const result = confirm("Вы точно хотите удалить выбранных пользователей?");
      if (result) {
        this.checkedIDs = []
        this.achievement.forEach((value, index) => {
          if (value.isChecked) {
            this.achievement = this.achievement.filter(u => u !== value);
            this.usersService.deleteAchievementById(value.id).subscribe();
          }
        });
        setTimeout(function(){
          location.reload();
        }, 2000);
        alert("Достижение было удалено!");
      } else alert("Удаление было отменено!");
    } else alert("Ничего не выделено!");
  }

  checkIfAllSelected() {
    this.selectedAll = this.achievement.every(function(item2:any) {
        return this.item2.isChecked == true;
      })
  }

  checkAllCheckBox(ev: any) { // Angular 13
    this.achievement.forEach(x => x.isChecked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.achievement.every(us => us.isChecked);
  }
}
