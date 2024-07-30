import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionRodamientosComponent } from './proteccion-rodamientos.component';

describe('ProteccionRodamientosComponent', () => {
  let component: ProteccionRodamientosComponent;
  let fixture: ComponentFixture<ProteccionRodamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProteccionRodamientosComponent]
    });
    fixture = TestBed.createComponent(ProteccionRodamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
