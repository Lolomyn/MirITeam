import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UsersService} from '../../system/shared/services/users.service';
import {Message} from '../../system/shared/models/message.model';
import {AuthService} from '../../system/shared/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { User } from 'src/app/system/shared/models/user.model';
import { AddService } from 'src/app/system/shared/services/add.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: Message;
  user: User[] = [];

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private addService: AddService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fcs: new FormControl(null, [Validators.required]),
      pnumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]), 
      repassword: new FormControl(null, [Validators.required]), // добавить валидатор для проверки пароля
      age: new FormControl(null, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      course: new FormControl(),
      institute: new FormControl(),
      groupID: new FormControl(),
      inn: new FormControl(null, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      snils: new FormControl(null, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      bshifr: new FormControl(),
      stnumber: new FormControl(),
      vk: new FormControl(),
      telegram: new FormControl(),
      comment: new FormControl(),
    }, { validators: this.checkPasswords });
    this.message = new Message('danger', '');
  }

  matcher = new MyErrorStateMatcher();
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let password = group.get('password').value;
    let repassword = group.get('repassword').value
    return password === repassword ? null : { notSame: true }
  }

  addText() {
    let pnumber_input = (<HTMLInputElement>document.getElementById('tel'));
    if (pnumber_input.value == "" || pnumber_input.value == "+" || pnumber_input.value == "+7") pnumber_input.value = "+7 ";
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
    let password_input = document.getElementById("password");
    let repasword_input = document.getElementsByClassName('repassword');
    // if (password_input.value)

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

  onSubmit(fcs, pnumber, email, password, age, /*course, */ 
    /*institute, groupID, */inn, snils, bshifr, stnumber, vk, telegram, comment) {
      var institute = "ИРИТ";
      var course = 4;
      var groupID = "18-ИТД";
      this.addService.User({fcs, pnumber, email, password, age, course, 
      institute, groupID, inn, snils, bshifr, stnumber, vk, telegram, comment} as User)
      .subscribe(user => {
        this.user.push(user);
      });
      alert("Пользователь добавлен");
  }
}

export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);

    return invalidCtrl || invalidParent;
  }
}
