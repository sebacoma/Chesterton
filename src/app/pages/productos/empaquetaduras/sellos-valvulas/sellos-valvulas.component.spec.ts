import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosValvulasComponent } from './sellos-valvulas.component';

describe('SellosValvulasComponent', () => {
  let component: SellosValvulasComponent;
  let fixture: ComponentFixture<SellosValvulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosValvulasComponent]
    });
    fixture = TestBed.createComponent(SellosValvulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
