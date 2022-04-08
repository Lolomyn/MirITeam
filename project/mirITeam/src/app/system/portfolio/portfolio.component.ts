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

  // edituser: User | undefined;
  
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
      date: new FormControl(null, [Validators.required])
    });
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

  delete() {
    alert("Добавить удаление");
  }

  loadToExcel() {
    alert("Добавить выгрузку в Excel");
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

  add(name: any, status: any, organizator:any, stepen: any, date:any) {
    var ball = 0;
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
      else if (stepen == "Призёр") ball = 2;
      else if (stepen == "Участник") ball = 3;
      else if (stepen == "Дипломант") ball = 2;
    }

    alert("Name: " + name + ", status: " + status + ", organizator: " + organizator + ", stepen: " + stepen + ", date: " + date + ", ball: " + ball);

    // ВСТАВИТЬ СЮДА БД ДОСТИЖЕНИЙ
    // this.addService.User({login, password, type, first_login, during, comment} as User)
    //   .subscribe(user => {
    //     this.user.push(user);
    //   });

    ball = 0; 

    alert("Достижение добавлено!");
    setTimeout(function(){
      location.reload();
    }, 2000);
  }

  myFunction() {
    // alert("worked");
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


  // ЗАМЕНИТЬ НА БД ДОСТИЖЕНИЙ
  moveCheckedIDs() {
    var counter = 0;
    this.userr.forEach((value, index) => {
      if (value.isChecked) {
        counter++;
      }
    });

    if (counter != 0) {
      const result = confirm("Вы точно хотите удалить выбранных пользователей?");
      if (result) {
        this.checkedIDs = []
        this.userr.forEach((value, index) => {
          if (value.isChecked) {
            // value.id_ = value.id;
            // this.usersService.createNewUser_a(value)
            // .subscribe(userr => {
            //   this.checkedIDs.push(userr);
            // });

            this.userr = this.userr.filter(u => u !== value);
            this.usersService.deleteUserById(value.id).subscribe();
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
    this.selectedAll = this.userr.every(function(item2:any) {
        return this.item2.isChecked == true;
      })
  }

  checkAllCheckBox(ev: any) { // Angular 13
    this.userr.forEach(x => x.isChecked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.userr.every(us => us.isChecked);
  }
}
