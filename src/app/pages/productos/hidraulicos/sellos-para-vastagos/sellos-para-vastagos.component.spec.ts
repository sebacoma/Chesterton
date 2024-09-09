import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosParaVastagosComponent } from './sellos-para-vastagos.component';

describe('SellosParaVastagosComponent', () => {
  let component: SellosParaVastagosComponent;
  let fixture: ComponentFixture<SellosParaVastagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosParaVastagosComponent]
    });
    fixture = TestBed.createComponent(SellosParaVastagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
