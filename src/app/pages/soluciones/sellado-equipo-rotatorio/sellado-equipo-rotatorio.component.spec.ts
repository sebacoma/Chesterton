import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelladoEquipoRotatorioComponent } from './sellado-equipo-rotatorio.component';

describe('SelladoEquipoRotatorioComponent', () => {
  let component: SelladoEquipoRotatorioComponent;
  let fixture: ComponentFixture<SelladoEquipoRotatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelladoEquipoRotatorioComponent]
    });
    fixture = TestBed.createComponent(SelladoEquipoRotatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
