


import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Workout {
  type: string;
  minutes: number;
}

interface UserData {
  id: number;
  name: string;
  workouts: Workout[];
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly localStorageKey = 'userData';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.initializeData();
    }
  }

  private initializeData(): void {
    const existingData = localStorage.getItem(this.localStorageKey);
    if (!existingData) {
      const initialData: UserData[] = [
        {
          id: 1,
          name: 'Deep',
          workouts: [
            { type: 'Running', minutes: 30 },
            { type: 'Cycling', minutes: 45 },
            { type: 'Boxing', minutes: 40 },
            { type: 'Running', minutes: 43 }
          ]
        },
        {
          id: 2,
          name: 'RD',
          workouts: [
            { type: 'Swimming', minutes: 60 },
            { type: 'Yoga', minutes: 40 },
            { type: 'Boxing', minutes: 40 },
            { type: 'Running', minutes: 43 }
          ]
        },
        {
          id: 3,
          name: 'Prakash',
          workouts: [
            { type: 'Gym', minutes: 50 },
            { type: 'Hiking', minutes: 70 },
            { type: 'Boxing', minutes: 40 },
            { type: 'Running', minutes: 43 }
          ]
        }
      ];
      localStorage.setItem(this.localStorageKey, JSON.stringify(initialData));
    }
  }

  public saveData(key: string, value: any): void {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  public getData(key: string): any {
    if (this.isBrowser) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null;
  }

  public removeData(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  public clearData(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}