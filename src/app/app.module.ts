import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomStyleModule} from './shared/modules/custom-style/custom-style.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {
  MatCheckboxModule,
  MatDatepickerModule, MatFormFieldModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatStepperModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ClaimsComponent } from './claims/claims.component';
import { AccountComponent } from './account/account.component';
import {AppSideNavComponent} from './applications/app-side-nav/app-side-nav.component';
import {UpdateComponent} from './applications/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationBarComponent,
    NavComponent,
    DashboardComponent,
    ApplicationsComponent,
    ClaimsComponent,
    AccountComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomStyleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatStepperModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule

    // ApplicationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
