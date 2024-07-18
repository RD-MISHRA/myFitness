import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWorkoutComponent } from './display-workout.component';

describe('DisplayWorkoutComponent', () => {
  let component: DisplayWorkoutComponent;
  let fixture: ComponentFixture<DisplayWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
