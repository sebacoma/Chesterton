import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelladoValvulasComponent } from './sellado-valvulas.component';

describe('SelladoValvulasComponent', () => {
  let component: SelladoValvulasComponent;
  let fixture: ComponentFixture<SelladoValvulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelladoValvulasComponent]
    });
    fixture = TestBed.createComponent(SelladoValvulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
