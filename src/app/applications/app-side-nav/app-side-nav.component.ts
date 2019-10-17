import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.scss']
})
export class AppSideNavComponent implements OnInit {

  items: [
    {name: 'General Information', description: 'Input user basic information'},
    {name: 'Insurance Information', description: 'Input basic insurance information'},
    {name: 'Policy Calculator', description: 'Calculate and select policy'},
    {name: 'Renew Policy', description: 'Renew the policy'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
