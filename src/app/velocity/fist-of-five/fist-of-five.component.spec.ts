import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FistOfFiveComponent } from './fist-of-five.component';

describe('FistOfFiveComponent', () => {
  let component: FistOfFiveComponent;
  let fixture: ComponentFixture<FistOfFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistOfFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistOfFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
