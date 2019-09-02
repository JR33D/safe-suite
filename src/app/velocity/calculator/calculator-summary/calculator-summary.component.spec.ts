import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSummaryComponent } from './calculator-summary.component';

describe('CalculatorSummaryComponent', () => {
  let component: CalculatorSummaryComponent;
  let fixture: ComponentFixture<CalculatorSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
