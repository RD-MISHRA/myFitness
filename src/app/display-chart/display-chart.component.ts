import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { RouterLink } from '@angular/router';

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
  selector: 'app-display-chart',
  standalone: true,
  imports: [CommonModule, ChartModule, RouterLink],
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css'],
})
export class DisplayChartComponent implements OnInit, AfterViewInit {
  userData: UserData[] = [];
  selectedUser: UserData | null = null;
  barChartData: any;
  pieChartData: any;
  lineChartData: any;
  chartOptions: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.userData = JSON.parse(localStorage.getItem('userData') || '[]');
    }

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#FFFFFF' // Set legend text color to white
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#FFFFFF' // Set x-axis labels color to white
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#FFFFFF' // Set y-axis labels color to white
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  selectUser(user: UserData) {
    this.selectedUser = user;
    this.updateChartData();
  }

  updateChartData() {
    if (!this.selectedUser) return;

    const workoutTypes = this.selectedUser.workouts.map(workout => workout.type);
    const workoutMinutes = this.selectedUser.workouts.map(workout => workout.minutes);

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

    this.barChartData = {
      labels: workoutTypes,
      datasets: [
        {
          label: 'Workout Minutes',
          backgroundColor: colors,
          data: workoutMinutes,
          borderColor: 'white',
          borderWidth: 2
        }
      ]
    };

    this.pieChartData = {
      labels: workoutTypes,
      datasets: [
        {
          label: 'Workout Distribution',
          backgroundColor: colors,
          data: workoutMinutes
        }
      ]
    };

    this.lineChartData = {
      labels: workoutTypes,
      datasets: [
        {
          label: 'Workout Minutes',
          borderColor: '#42A5F5',
          data: workoutMinutes,
          fill: false,
          tension: 0.4
        }
      ]
    };

    this.cdr.detectChanges();
  }
}