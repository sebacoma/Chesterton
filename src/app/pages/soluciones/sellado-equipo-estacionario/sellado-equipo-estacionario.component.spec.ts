import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelladoEquipoEstacionarioComponent } from './sellado-equipo-estacionario.component';

describe('SelladoEquipoEstacionarioComponent', () => {
  let component: SelladoEquipoEstacionarioComponent;
  let fixture: ComponentFixture<SelladoEquipoEstacionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelladoEquipoEstacionarioComponent]
    });
    fixture = TestBed.createComponent(SelladoEquipoEstacionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
