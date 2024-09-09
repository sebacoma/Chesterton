import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosAuxiliaresComponent } from './dispositivos-auxiliares.component';

describe('DispositivosAuxiliaresComponent', () => {
  let component: DispositivosAuxiliaresComponent;
  let fixture: ComponentFixture<DispositivosAuxiliaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispositivosAuxiliaresComponent]
    });
    fixture = TestBed.createComponent(DispositivosAuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
