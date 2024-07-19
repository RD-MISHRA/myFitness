import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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
  selector: 'app-display-workout',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './display-workout.component.html',
  styleUrls: ['./display-workout.component.css'],
})
export class DisplayWorkoutComponent {
  filterForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl('All'),
  });

  userData: UserData[] | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.userData = JSON.parse(localStorage.getItem('userData') || '[]');
    }
  }

  getWorkoutTypes(workouts: Workout[]): string {
    return workouts.map((workout) => workout.type).join(', ');
  }

  getTotalMinutes(workouts: Workout[]): number {
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }

  filteredUserData(): UserData[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }

    const formValue = this.filterForm.value;
    const userData = JSON.parse(localStorage.getItem('userData') || '[]');
    return userData.filter((user: UserData) => {
      if (
        formValue.name &&
        !user.name.toLowerCase().includes(formValue.name.toLowerCase())
      ) {
        return false;
      }
      if (formValue.type === 'All') {
        return true;
      }
      if (formValue.type) {
        const workouts = user.workouts.filter(
          (workout) => workout.type === formValue.type
        );
        if (workouts.length === 0) {
          return false;
        }
      }
      return true;
    });
  }

  currentPage = 1;
  itemsPerPage = 3;

  prevPage() {
    this.currentPage--;
  }

  nextPage() {
    this.currentPage++;
  }

  changeItemsPerPage(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.itemsPerPage = parseInt(target.value, 10);
  }

  get totalPages() {
    return Math.ceil(this.filteredUserData().length / this.itemsPerPage);
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUserData().slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  trackByFn(index: number, item: UserData): number {
    return item.id;
  }

  deleteUser(id: number) {
    if (id <= 3) {
      alert('Top 3 users cannot be deleted');
      return;
    }

    if (isPlatformBrowser(this.platformId)) {
      this.userData = this.userData?.filter(user => user.id !== id) || null;
      localStorage.setItem('userData', JSON.stringify(this.userData));
    }
  }
}