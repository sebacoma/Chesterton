import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosPartidosComponent } from './sellos-partidos.component';

describe('SellosPartidosComponent', () => {
  let component: SellosPartidosComponent;
  let fixture: ComponentFixture<SellosPartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosPartidosComponent]
    });
    fixture = TestBed.createComponent(SellosPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
