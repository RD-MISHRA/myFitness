

import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
    service = TestBed.inject(LocalStorageService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with 3 users in local storage', () => {
    const userData = service.getData('userData');
    expect(userData.length).toBe(3);
    expect(userData[0].name).toBe('Deep');
    expect(userData[1].name).toBe('RD');
    expect(userData[2].name).toBe('Prakash');
  });

  it('should get data from local storage', () => {
    const testData = { id: 4, name: 'User4', workouts: [] };
    localStorage.setItem('testData', JSON.stringify(testData));
    const retrievedData = service.getData('testData');
    expect(retrievedData).toEqual(testData);
  });

  it('should save data to local storage', () => {
    const testData = { id: 5, name: 'User5', workouts: [] };
    service.saveData('testData', testData);
    const savedData = JSON.parse(localStorage.getItem('testData')!);
    expect(savedData).toEqual(testData);
  });

  it('should remove data from local storage', () => {
    const testData = { id: 2, name: 'RD', workouts: [] };
    localStorage.setItem('testData', JSON.stringify(testData));
    service.removeData('testData');
    const removedData = service.getData('testData');
    expect(removedData).toBeNull();
  });

  it('should clear all data from local storage', () => {
    service.clearData();
    const userData = service.getData('userData');
    expect(userData).toBeNull();
  });
});