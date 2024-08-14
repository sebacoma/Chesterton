import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosCartuchoComponent } from './sellos-cartucho.component';

describe('SellosCartuchoComponent', () => {
  let component: SellosCartuchoComponent;
  let fixture: ComponentFixture<SellosCartuchoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosCartuchoComponent]
    });
    fixture = TestBed.createComponent(SellosCartuchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
