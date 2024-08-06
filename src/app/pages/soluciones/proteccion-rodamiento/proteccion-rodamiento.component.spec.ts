import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionRodamientoComponent } from './proteccion-rodamiento.component';

describe('ProteccionRodamientoComponent', () => {
  let component: ProteccionRodamientoComponent;
  let fixture: ComponentFixture<ProteccionRodamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProteccionRodamientoComponent]
    });
    fixture = TestBed.createComponent(ProteccionRodamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
