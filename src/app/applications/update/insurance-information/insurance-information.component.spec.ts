import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceInformationComponent } from './insurance-information.component';

describe('InsuranceInformationComponent', () => {
  let component: InsuranceInformationComponent;
  let fixture: ComponentFixture<InsuranceInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
