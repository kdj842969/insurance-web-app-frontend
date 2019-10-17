import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err = false;
  fbSub;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(user) {
    this.authService.login(user as User)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.err = true;
        }
      });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  updateErr() {
    if (this.err) {
      this.err = false;
    }
  }

}
