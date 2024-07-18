import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { DisplayWorkoutComponent } from './display-workout/display-workout.component';
import { DisplayChartComponent } from './display-chart/display-chart.component';

const routes: Routes = [
  { path: 'add-workout', component: AddWorkoutComponent },
  { path: 'display-workout', component: DisplayWorkoutComponent },
  { path: 'display-chart', component: DisplayChartComponent },
  { path: '', redirectTo: '/add-workout', pathMatch: 'full' },
  { path: '**', redirectTo: '/add-workout' }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }