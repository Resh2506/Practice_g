import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorCompComponent } from './motor-comp.component';

describe('MotorCompComponent', () => {
  let component: MotorCompComponent;
  let fixture: ComponentFixture<MotorCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorCompComponent]
    });
    fixture = TestBed.createComponent(MotorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
