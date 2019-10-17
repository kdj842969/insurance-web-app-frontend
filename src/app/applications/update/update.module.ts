import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UserInformationComponent } from './user-information/user-information.component';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule, MatStepperModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomStyleModule} from '../../shared/modules/custom-style/custom-style.module';
import {HttpClientModule} from '@angular/common/http';
import {UpdateComponent} from './update.component';
import {AppSideNavComponent} from '../app-side-nav/app-side-nav.component';
import { InsuranceInformationComponent } from './insurance-information/insurance-information.component';
import { PolicyCalculatorComponent } from './policy-calculator/policy-calculator.component';
import { RenewComponent } from './renew/renew.component';
@NgModule({
  declarations: [UserInformationComponent, AppSideNavComponent, InsuranceInformationComponent, PolicyCalculatorComponent, RenewComponent],
  imports: [
    CommonModule,
    CustomStyleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateModule { }
