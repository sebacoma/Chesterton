import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosSoporteSelladoComponent } from './sellos-soporte-sellado.component';

describe('SellosSoporteSelladoComponent', () => {
  let component: SellosSoporteSelladoComponent;
  let fixture: ComponentFixture<SellosSoporteSelladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosSoporteSelladoComponent]
    });
    fixture = TestBed.createComponent(SellosSoporteSelladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
