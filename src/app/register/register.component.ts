import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group({
      // 1st param: default value, 2nd param: array of validators
      username: ['', [Validators.required, Validators.minLength(3)]],
      passwordGroup: this.formBuilder.group({
        password: '',
        confirmPassword: ''
      }, {validator: [Validators.required, this.passwordValidator]})
    });
  }

  passwordValidator(passwordGroup: FormGroup) {
    const {password, confirmPassword} = passwordGroup.value;
    return password === confirmPassword ? null : {passwordValidator: 'passwords are not matching'};
  }

  submit(user) {
    console.log(user);
    if (this.registerFormGroup.valid) {
      const {username, passwordGroup, passwordGroup: {password}} = this.registerFormGroup.value;
      this.authService.register({username, password})
        .subscribe(res => {
          if (res.success) {
            console.log('register success');
          } else {
            console.log('register failed');
          }
        });
    } else {
      return false;
    }

  }


}
