import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosReparacionComponent } from './servicios-reparacion.component';

describe('ServiciosReparacionComponent', () => {
  let component: ServiciosReparacionComponent;
  let fixture: ComponentFixture<ServiciosReparacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosReparacionComponent]
    });
    fixture = TestBed.createComponent(ServiciosReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
