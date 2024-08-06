import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosInstalacionDetencionDePlantaComponent } from './servicios-instalacion-detencion-de-planta.component';

describe('ServiciosInstalacionDetencionDePlantaComponent', () => {
  let component: ServiciosInstalacionDetencionDePlantaComponent;
  let fixture: ComponentFixture<ServiciosInstalacionDetencionDePlantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosInstalacionDetencionDePlantaComponent]
    });
    fixture = TestBed.createComponent(ServiciosInstalacionDetencionDePlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
