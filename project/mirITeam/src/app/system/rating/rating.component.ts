import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AddService } from '../shared/services/add.service';
import { StudyingService } from '../shared/services/studying.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

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

}
