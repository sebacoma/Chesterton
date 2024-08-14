import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosMezclaAgitadoresComponent } from './sellos-mezcla-agitadores.component';

describe('SellosMezclaAgitadoresComponent', () => {
  let component: SellosMezclaAgitadoresComponent;
  let fixture: ComponentFixture<SellosMezclaAgitadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosMezclaAgitadoresComponent]
    });
    fixture = TestBed.createComponent(SellosMezclaAgitadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
