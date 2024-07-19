
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [
        BrowserAnimationsModule,
        MatSidenavModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct initial sidebar width class', () => {
    expect(component.sidebarWidthClass).toBe('w-10');
  });

  it('should render the sidebar with the correct class', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.custom-sidebar')).toBeTruthy();
  });

  it('should render the image with the correct attributes', () => {
    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toContain('https://res.cloudinary.com/dm62dlqls/image/upload/v1721310543/images_1_gglclj.png');
    expect(img.alt).toBe('My Image');
  });

  it('should render all the list items with correct text', () => {
    const compiled = fixture.nativeElement;
    const listItems = compiled.querySelectorAll('li');
    expect(listItems.length).toBe(3);
    expect(listItems[0].textContent).toContain('Add Workout');
    expect(listItems[1].textContent).toContain('Display Workouts');
    expect(listItems[2].textContent).toContain('Display Chart');
  });

  it('should have correct router links', () => {
    const compiled = fixture.nativeElement;
    const links = compiled.querySelectorAll('a');
    expect(links[0].getAttribute('routerLink')).toBe('/add-workout');
    expect(links[1].getAttribute('routerLink')).toBe('/display-workout');
    expect(links[2].getAttribute('routerLink')).toBe('/display-chart');
  });

  it('should have correct icons for each list item', () => {
    const compiled = fixture.nativeElement;
    const icons = compiled.querySelectorAll('.material-icons');
    expect(icons[0].textContent).toBe('add');
    expect(icons[1].textContent).toBe('list');
    expect(icons[2].textContent).toBe('bar_chart');
  });
});
