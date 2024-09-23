import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelladoMultipropositoComponent } from './sellado-multiproposito.component';

describe('SelladoMultipropositoComponent', () => {
  let component: SelladoMultipropositoComponent;
  let fixture: ComponentFixture<SelladoMultipropositoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelladoMultipropositoComponent]
    });
    fixture = TestBed.createComponent(SelladoMultipropositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
