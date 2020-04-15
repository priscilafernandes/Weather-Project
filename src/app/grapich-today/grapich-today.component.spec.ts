import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapichTodayComponent } from './grapich-today.component';

describe('GrapichTodayComponent', () => {
  let component: GrapichTodayComponent;
  let fixture: ComponentFixture<GrapichTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapichTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapichTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
