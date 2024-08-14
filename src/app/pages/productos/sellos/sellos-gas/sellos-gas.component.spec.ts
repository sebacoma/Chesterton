import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosGasComponent } from './sellos-gas.component';

describe('SellosGasComponent', () => {
  let component: SellosGasComponent;
  let fixture: ComponentFixture<SellosGasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosGasComponent]
    });
    fixture = TestBed.createComponent(SellosGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
