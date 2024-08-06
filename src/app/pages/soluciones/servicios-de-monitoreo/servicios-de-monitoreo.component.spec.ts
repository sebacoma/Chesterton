import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDeMonitoreoComponent } from './servicios-de-monitoreo.component';

describe('ServiciosDeMonitoreoComponent', () => {
  let component: ServiciosDeMonitoreoComponent;
  let fixture: ComponentFixture<ServiciosDeMonitoreoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosDeMonitoreoComponent]
    });
    fixture = TestBed.createComponent(ServiciosDeMonitoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
