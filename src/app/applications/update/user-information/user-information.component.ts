import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApplicationsService} from '../../../shared/services/applications.service';
import {Router} from '@angular/router';
import {Client} from '../../../shared/models/client';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  userInformationForm: FormGroup;
  client: Client;

  constructor(private fb: FormBuilder,
              private applicationService: ApplicationsService,
              private router: Router) { }

  ngOnInit() {
    this.userInformationForm = this.fb.group({
      firstName: '',
      lastName: '',
      middleName: '',
      sex: '',
      dateOfBirth: '',
      marital: '',
      education: '',
      occupation: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      ssn: '',
      license: ''
    });

    const path = this.router.url;
    const id = +path.split('/')[3];
    this.applicationService.getApplication(id).subscribe(res => {
      this.client = res.client;
      if (this.client) {
        this.userInformationForm.setValue({
          firstName: this.client.firstName,
          lastName: this.client.lastName,
          middleName: this.client.middleName,
          sex: this.client.sex,
          dateOfBirth: this.client.dateOfBirth,
          marital: `${this.client.marital}`,
          education: `${this.client.education}`,
          occupation: this.client.occupation,
          address1: this.client.address1,
          address2: this.client.address2,
          city: this.client.city,
          state: this.client.state,
          zip: this.client.zip,
          ssn: this.client.ssn,
          license: this.client.license
        });
      }
    });
  }


  onSubmit(val) {
    console.log(val);
  }

}
