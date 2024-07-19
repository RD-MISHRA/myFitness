

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayChartComponent } from './display-chart.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ChangeDetectorRef } from '@angular/core';

describe('DisplayChartComponent', () => {
  let component: DisplayChartComponent;
  let fixture: ComponentFixture<DisplayChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ChartModule, RouterTestingModule, DisplayChartComponent],
      providers: [ChangeDetectorRef]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize userData from localStorage', () => {
    const mockUserData = [
      { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] }
    ];
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockUserData));
    
    component.ngOnInit();
    
    expect(component.userData).toEqual(mockUserData);
  });

  it('should select a user and update chart data', () => {
    const mockUser = { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] };
    spyOn(component, 'updateChartData');

    component.selectUser(mockUser);

    expect(component.selectedUser).toEqual(mockUser);
    expect(component.updateChartData).toHaveBeenCalled();
  });

  it('should trigger change detection after updating chart data', () => {
    spyOn(component['cdr'], 'detectChanges');

    component.selectedUser = { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] };
    component.updateChartData();

    expect(component['cdr'].detectChanges).toHaveBeenCalled();
  });
});