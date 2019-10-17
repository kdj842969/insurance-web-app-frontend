import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService,
              private router: Router) {}

  public logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }


}
