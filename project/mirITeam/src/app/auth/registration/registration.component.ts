import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../system/shared/services/users.service';
import {Message} from '../../system/shared/models/message.model';
import {AuthService} from '../../system/shared/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { User } from 'src/app/system/shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fcs: new FormControl(null, [Validators.required]),
      pnumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // passwords: new FormGroup ({
      //   password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(8)])), 
      //   repassword: new FormControl(null, Validators.compose([Validators.required])),
      // }),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]), 
      repassword: new FormControl(null, [Validators.required]), // добавить валидатор для проверки пароля
      age: new FormControl(null, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      course: new FormControl(),
      institute: new FormControl(),
      inn: new FormControl(null, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      snils: new FormControl(null, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      bshifr: new FormControl(),
      stnumber: new FormControl(),
      vk: new FormControl(),
      telegram: new FormControl(),
      comment: new FormControl(),
    });
    this.message = new Message('danger', '');
  }

  show: boolean = false;
  imageSrc = "../../../assets/eye-off.svg";
  showPassword() {
    if (this.show == false) {
      this.show = true;
      this.imageSrc = "../../../assets/eye.svg";
    }
    else {
      this.show = false;
      this.imageSrc = "../../../assets/eye-off.svg";
    }
  }

  toMain() {
    this.router.navigate(['/main']);
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  toNextStep(step){
    let nextstep = document.getElementsByClassName('s'+step)[0] as HTMLElement;
    let curstep = document.getElementsByClassName('s'+(step-1).toString())[0] as HTMLElement;
    nextstep.classList.remove('step_'+step);
    curstep.classList.add('step_'+(step-1));
  }

  toPreviousStep(step) {
    let prevstep = document.getElementsByClassName('s'+step)[0] as HTMLElement;
    let curstep = document.getElementsByClassName('s'+(step+1).toString())[0] as HTMLElement;
    prevstep.classList.remove('step_'+step);
    curstep.classList.add('step_'+(step+1));
  }

  onSubmit() {
    alert("Ура, зарегался!");
  }

}
