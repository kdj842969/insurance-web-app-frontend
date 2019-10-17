import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-policy-calculator',
  templateUrl: './policy-calculator.component.html',
  styleUrls: ['./policy-calculator.component.scss']
})
export class PolicyCalculatorComponent implements OnInit {
  price = 0;
  policyForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.policyForm = this.fb.group({
      liability: '',
      collision: '',
      comprehensive: '',
      uninsured: '',
      medical: '',
      personal: '',
      startDate: '',
      endDate: ''
    });
  }

  onSubmit(val) {
    console.log(val);
  }

}
