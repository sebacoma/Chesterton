import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosComponentesComponent } from './sellos-componentes.component';

describe('SellosComponentesComponent', () => {
  let component: SellosComponentesComponent;
  let fixture: ComponentFixture<SellosComponentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosComponentesComponent]
    });
    fixture = TestBed.createComponent(SellosComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
