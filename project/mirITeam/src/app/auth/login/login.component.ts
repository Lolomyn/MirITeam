import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../system/shared/services/users.service';
import {Message} from '../../system/shared/models/message.model';
import {AuthService} from '../../system/shared/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { User } from 'src/app/system/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      phone_email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
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
  
  toRegistration() {
    this.router.navigate(['/registration']);
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
    this.message = new Message('danger', '');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.nowCanLogin) {
          this.showMessage({
            text: 'Теперь можете войти в систему',
            type: 'success'
          });
        } else if (params.accessDenied) {
          this.showMessage({
            text: 'Авторизуйтесь, чтобы продолжить',
            type: 'warning'
          });
        }
      });
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByLogin(formData.phone_email)
      .subscribe((user: User) => {
        if (user[0] == undefined) {
          console.log('Такого пользователя не существует!');

          let phone_email = document.getElementsByClassName('phone_email')[0] as HTMLElement;
          phone_email.classList.add('ng-invalid');

          let password = document.getElementsByClassName('password')[0] as HTMLElement;
          password.classList.add('ng-invalid');

          let span = document.getElementsByClassName('invisible2')[0] as HTMLElement;
          span.classList.remove('invisible2');
          span.classList.add('form-button-span');

          setTimeout(() => { 
            span.classList.remove('form-button-span');
            span.classList.add('invisible2');
            phone_email.classList.remove('ng-invalid');
            password.classList.remove('ng-invalid');
          }, 3000)

          this.showMessage
          ({
            text: 'Такого пользователя не существует',
            type: 'danger'
          });
        }
        else if (user) {
          if (user[0].password === formData.password && user[0].email === formData.phone_email || user[0].pnumber === formData.phone_email) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system', 'profile']);
          } else {
              console.log('Введен неверный пароль!');
              let phone_email = document.getElementsByClassName('phone_email')[0] as HTMLElement;
              phone_email.classList.add('ng-invalid');

              let password = document.getElementsByClassName('password')[0] as HTMLElement;
              password.classList.add('ng-invalid');

              let span = document.getElementsByClassName('invisible')[0] as HTMLElement;
              span.classList.remove('invisible');
              span.classList.add('form-button-span');
              
              setTimeout(() => { 
                span.classList.remove('form-button-span');
                span.classList.add('invisible');
                phone_email.classList.remove('ng-invalid');
                password.classList.remove('ng-invalid');
              }, 3000)
              this.showMessage
              ({
                text: 'Пароль не верный',
                type: 'danger'
              });
            }
        }
      });
  }
}
