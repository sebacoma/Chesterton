import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosRotatoriosComponent } from './sellos-rotatorios.component';

describe('SellosRotatoriosComponent', () => {
  let component: SellosRotatoriosComponent;
  let fixture: ComponentFixture<SellosRotatoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosRotatoriosComponent]
    });
    fixture = TestBed.createComponent(SellosRotatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
