import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApplicationsComponent} from './applications/applications.component';
import {ClaimsComponent} from './claims/claims.component';
import {AccountComponent} from './account/account.component';
import {UpdateComponent} from './applications/update/update.component';
import {UserInformationComponent} from './applications/update/user-information/user-information.component';
import {UpdateModule} from './applications/update/update.module';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'applications',
    children: [
      {
        path: '',
        component: ApplicationsComponent
      },
      {
        path: 'update/:id',
        // loadChildren: '../app/applications/update/update.module#UpdateModule'
        component: UpdateComponent
      },
      {
        path: 'new',
        component: UpdateComponent
      }
    ]
  },
  {
    path: 'claim',
    component: ClaimsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
