import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosEspecializadosComponent } from './sellos-especializados.component';

describe('SellosEspecializadosComponent', () => {
  let component: SellosEspecializadosComponent;
  let fixture: ComponentFixture<SellosEspecializadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosEspecializadosComponent]
    });
    fixture = TestBed.createComponent(SellosEspecializadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
