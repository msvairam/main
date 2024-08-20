import { ComponentFixture, TestBed } from '@angular/core/testing';

import { flightComponent } from './flight.component';

describe('flightComponent', () => {
  let component: flightComponent;
  let fixture: ComponentFixture<flightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [flightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(flightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
