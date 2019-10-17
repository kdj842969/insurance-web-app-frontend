import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyCalculatorComponent } from './policy-calculator.component';

describe('PolicyCalculatorComponent', () => {
  let component: PolicyCalculatorComponent;
  let fixture: ComponentFixture<PolicyCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
