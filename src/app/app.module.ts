// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { RouterModule } from '@angular/router';
// import { ChartModule } from 'primeng/chart';

// import { AppComponent } from './app.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AddWorkoutComponent } from './add-workout/add-workout.component';
// import { DisplayWorkoutComponent } from './display-workout/display-workout.component';
// import { DisplayChartComponent } from './display-chart/display-chart.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     SidebarComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatButtonModule,
//     RouterModule,
//     ChartModule,
//     AppRoutingModule, // Ensure AppRoutingModule is imported
//     AddWorkoutComponent, // Import standalone components
//     DisplayWorkoutComponent, // Import standalone components
//     DisplayChartComponent // Import standalone components
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { RouterModule } from '@angular/router';
// import { ChartModule } from 'primeng/chart';

// import { AppComponent } from './app.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { AppRoutingModule } from './app-routing.module';
// import { AddWorkoutComponent } from './add-workout/add-workout.component';
// import { DisplayWorkoutComponent } from './display-workout/display-workout.component';
// import { DisplayChartComponent } from './display-chart/display-chart.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     SidebarComponent,
//     AddWorkoutComponent, // Add standalone components to declarations
//     DisplayWorkoutComponent, // Add standalone components to declarations
//     DisplayChartComponent // Add standalone components to declarations
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatButtonModule,
//     RouterModule,
//     ChartModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
// Import DisplayWorkoutComponent and DisplayChartComponent here
import { DisplayWorkoutComponent } from './display-workout/display-workout.component';
import { DisplayChartComponent } from './display-chart/display-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
   
    // Remove DisplayWorkoutComponent and DisplayChartComponent from here
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
