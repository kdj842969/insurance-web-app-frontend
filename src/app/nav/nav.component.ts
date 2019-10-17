import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  myWorkRoutes: ROUTE[] = [
    {
      icon: 'dashboard',
      route: '/dashboard',
      title: 'Dashboard',
    },
    {
      icon: 'storage',
      route: '/applications',
      title: 'Applications',
    }
  ];

  customerRoutes: ROUTE[] = [
    {
      icon: 'feedback',
      route: '/claim',
      title: 'Reports',
    }
  ];

  accountRoutes: ROUTE[] = [
    {
      icon: 'person',
      route: '/account',
      title: 'Account',
    }
  ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


}
