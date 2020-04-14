import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeatherRealComponent } from './display-weather-real.component';

describe('DisplayWeatherRealComponent', () => {
  let component: DisplayWeatherRealComponent;
  let fixture: ComponentFixture<DisplayWeatherRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWeatherRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWeatherRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
