import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AddService } from '../shared/services/add.service';
import { StudyingService } from '../shared/services/studying.service';
import * as XLSX from 'xlsx';

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
  
  constructor(
    private addService: AddService,
    private studyingService: StudyingService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

    
  getUser(): void {
    this.studyingService.getUser()
      .subscribe(user => (this.userr = user));
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

  edit() {
    alert("Добавить редактирование");
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

  add() {
    alert("Добавить добавление в бд");
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

}
