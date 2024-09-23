import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoEspecialComponent } from './equipo-especial.component';

describe('EquipoEspecialComponent', () => {
  let component: EquipoEspecialComponent;
  let fixture: ComponentFixture<EquipoEspecialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoEspecialComponent]
    });
    fixture = TestBed.createComponent(EquipoEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
