import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicationsService} from '../../shared/services/applications.service';
import {Client} from '../../shared/models/client';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../../shared/models/car';
import {Policy} from '../../shared/models/policy';
import {Type} from '../../shared/models/type';
import {TypeScriptEmitter} from '@angular/compiler';
import {Application} from '../../shared/models/application';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  userInformationForm: FormGroup;
  insuranceInformationForm: FormGroup;
  isLinear = true;
  id: number;
  client: Client;
  car: Car;
  policy: Policy;
  price = 0;
  policyForm: FormGroup;
  types: Type[];
  renewForm: FormGroup;

  constructor(private fb: FormBuilder,
              private applicationService: ApplicationsService,
              private ar: ActivatedRoute) { }

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
    this.insuranceInformationForm = this.fb.group({
      vinNumber: '',
      garageZip: '',
      primaryUse: '',
      year: '',
      makes: '',
      models: '',
      bodyStyle: '',
      totalResidence: ''
    });
    this.policyForm = this.fb.group({
      startDate: '',
      endDate: '',
      liability: '',
      collision: '',
      comprehensive: '',
      uninsured: '',
      medical: '',
      personal: ''
    });
    this.renewForm = this.fb.group({
      newEndDate: ''
    });

    this.id = this.ar.snapshot.params.id;
    if (this.id) {
      this.applicationService.getApplication(this.id).subscribe(res => {
        this.client = res.client;
        this.car = res.car ? res.car : null;
        this.policy = res.policy ? res.policy : null;
        if (this.policy) {
          this.types = res.policy.types ? res.policy.types : null;
        }

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

        if (this.car) {
          this.insuranceInformationForm.setValue({
            vinNumber: this.car.vinNumber,
            garageZip: this.car.garageZip,
            primaryUse: this.car.primaryUse,
            year: this.car.year,
            makes: this.car.makes,
            models: this.car.models,
            bodyStyle: this.car.bodyStyle,
            totalResidence: this.car.totalResidence
          });
       }

        if (this.policy) {
          let isLiability = '';
          let isCollision = '';
          let isComprehensive = '';
          let isUninsured = '';
          let isMedical = '';
          let isPersonal = '';
          this.types.forEach((val) => {
            if (val.type === 'liability') {
              isLiability = val.type;
            } else if (val.type === 'collision') {
              isCollision = val.type;
            } else if (val.type === 'comprehensive') {
              isComprehensive = val.type;
            } else if (val.type === 'uninsured') {
              isUninsured = val.type;
            } else if (val.type === 'medical') {
              isMedical = val.type;
            } else if (val.type === 'personal') {
              isPersonal = val.type;
            }
          });

          this.policyForm.setValue({
            startDate: this.policy.startDate,
            endDate: this.policy.endDate,
            liability: isLiability,
            collision: isCollision,
            comprehensive: isComprehensive,
            uninsured: isUninsured,
            medical: isMedical,
            personal: isPersonal
          });
        }
      });
    }
  }

  onSubmit() {
    const finalApplication = {};
    if (this.userInformationForm.value.firstName) {
      const {firstName, lastName, middleName, sex, dateOfBirth, marital, education, occupation,
        address1, address2, city, state, zip, ssn, license} = this.userInformationForm.value;
      const realDate = dateOfBirth ? JSON.stringify(dateOfBirth).substring(1, 11) : '';
      const realMarital = marital ? +marital : '';
      const realEducation = education ? +education : '';
      const finalClient = {
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        sex: sex,
        dateOfBirth: dateOfBirth,
        marital: marital,
        education: education,
        occupation: occupation,
        address1: address1,
        address2: address1,
        city: city,
        state: state,
        zip: zip,
        ssn: ssn,
        license: license
      };
      console.log(finalClient);
      finalApplication['client'] = finalClient;
      finalApplication['applicationStatus'] = 'Quotes';
    }

    if (this.insuranceInformationForm.value.vinNumber) {
      const {vinNumber, garageZip, primaryUse, year, makes, models, bodyStyle,
        totalResidence} = this.insuranceInformationForm.value;
      const realTotalResidence = totalResidence ? +totalResidence : '';
      const finalCar = {
        vinNumber: vinNumber,
        garageZip: garageZip,
        primaryUse: primaryUse,
        year: year,
        makes: makes,
        models: models,
        bodyStyle: bodyStyle,
        totalResidence: totalResidence
      };
      console.log(finalCar);
      finalApplication['car'] = finalCar;
      finalApplication['applicationStatus'] = 'Unopened';
    }

    if (this.policyForm.value.startDate) {
      const {startDate, endDate, liability, collision, comprehensive, uninsured, medical,
        personal} = this.policyForm.value;
      console.log(this.policyForm.value);
      const realStartDate = startDate ? JSON.stringify(startDate).substring(1, 11) : '';
      const realEndDate = endDate ? JSON.stringify(endDate).substring(1, 11) : '';
      const types = [];
      if (liability || collision || comprehensive || uninsured || medical || personal) {
        if (liability === true || liability === 'liability') {
          types.push({id: 1, type: 'liability'});
        }
        if (collision === true || collision === 'collision') {
          types.push({id: 2, type: 'collision'});
        }
        if (comprehensive === true || comprehensive === 'comprehensive') {
          types.push({id: 3, type: 'comprehensive'});
        }
        if (uninsured === true || uninsured === 'uninsured') {
          types.push({id: 4, type: 'uninsured'});
        }
        if (medical === true || medical === 'medical') {
          types.push({id: 5, type: 'medical'});
        }
        if (personal === true || personal === 'personal') {
          types.push({id: 6, type: 'personal'});
        }
      }

      const finalPolicy = {
        startDate: realStartDate,
        endDate: realEndDate,
        types: types
      };
      console.log(finalPolicy);
      finalApplication['policy'] = finalPolicy;
      if (this.compareDate(realEndDate)) {
        finalApplication['applicationStatus'] = 'Expired';
      } else {
        finalApplication['applicationStatus'] = 'In Progress';
      }
    }

    const path = this.ar.snapshot.params.id;
    if (path) { // update
      finalApplication['id'] = path;
      this.applicationService.updateApplication(finalApplication, path).subscribe(res => {
        console.log(res);
      })
      console.log(finalApplication);
    } else { // new
      console.log(finalApplication);
      this.applicationService.addApplication(finalApplication).subscribe(res => {
        console.log(res);
      });
    }
  }

  compareDate(currentDate) {
    const sysDate = new Date();
    const curDate = new Date(currentDate);
    if (sysDate > curDate) {
      return true; // expired
    } else {
      return false; // In Progress
    }
  }
}
