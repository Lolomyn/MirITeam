import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(  
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  toRegistration() {
    this.router.navigate(['/registration']);
  }

}
