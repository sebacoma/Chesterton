import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosHidraulicosNeumaticosComponent } from './sellos-hidraulicos-neumaticos.component';

describe('SellosHidraulicosNeumaticosComponent', () => {
  let component: SellosHidraulicosNeumaticosComponent;
  let fixture: ComponentFixture<SellosHidraulicosNeumaticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosHidraulicosNeumaticosComponent]
    });
    fixture = TestBed.createComponent(SellosHidraulicosNeumaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
