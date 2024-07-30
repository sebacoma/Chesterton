import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaquetadurasMecanicasJuntasComponent } from './empaquetaduras-mecanicas-juntas.component';

describe('EmpaquetadurasMecanicasJuntasComponent', () => {
  let component: EmpaquetadurasMecanicasJuntasComponent;
  let fixture: ComponentFixture<EmpaquetadurasMecanicasJuntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpaquetadurasMecanicasJuntasComponent]
    });
    fixture = TestBed.createComponent(EmpaquetadurasMecanicasJuntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
