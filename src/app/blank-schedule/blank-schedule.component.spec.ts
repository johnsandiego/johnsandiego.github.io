import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankScheduleComponent } from './blank-schedule.component';

describe('BlankScheduleComponent', () => {
  let component: BlankScheduleComponent;
  let fixture: ComponentFixture<BlankScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
