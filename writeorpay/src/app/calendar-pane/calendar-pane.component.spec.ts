import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPaneComponent } from './calendar-pane.component';

describe('CalendarPaneComponent', () => {
  let component: CalendarPaneComponent;
  let fixture: ComponentFixture<CalendarPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
