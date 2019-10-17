import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-insurance-information',
  templateUrl: './insurance-information.component.html',
  styleUrls: ['./insurance-information.component.scss']
})
export class InsuranceInformationComponent implements OnInit {
  insuranceInformationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.insuranceInformationForm = this.fb.group({
      vinNumber: '',
      zip: '',
      use: '',
      year: '',
      makes: '',
      models: '',
      bodyStyles: '',
      liability: '',
      collision: '',
      comprehensive: '',
      uninsured: '',
      medical: '',
      personal: ''
    });
  }

  onSubmit(val) {
    console.log(val);
  }

}
