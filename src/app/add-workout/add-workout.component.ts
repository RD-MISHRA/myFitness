

import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { LocalStorageService } from '../local-storage.service';

interface Workout {
  type: string;
  minutes: number;
}

interface UserData {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css'],
})
export class AddWorkoutComponent {
  workoutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    type: new FormControl('Gym', [Validators.required]),
  });

  userData: UserData[] | null = null;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.userData = this.localStorageService.getData('userData');
    }
  }

  onSubmit() {
    if (!this.workoutForm.valid) {
      return;
    }

    const formValue = this.workoutForm.value as {
      name: string;
      duration: string;
      type: string;
    };

    if (isPlatformBrowser(this.platformId)) {
      let userData: UserData[] = this.localStorageService.getData('userData') || [];

      let user = userData.find((u: UserData) => u.name === formValue.name);
      if (!user) {
        user = {
          id: userData.length + 1,
          name: formValue.name,
          workouts: [],
        };
        userData.push(user);
      }

      let existingWorkout = user.workouts.find((w: Workout) => w.type === formValue.type);
      if (existingWorkout) {
        existingWorkout.minutes += parseInt(formValue.duration, 10);
        alert(`Workout time added to existing workout: ${formValue.type}`);
      } else {
        user.workouts.push({
          type: formValue.type,
          minutes: parseInt(formValue.duration, 10),
        });
        alert('Workout added successfully!');
      }

      this.localStorageService.saveData('userData', userData);
    }
  }
}