import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosMecanicosComponent } from './sellos-mecanicos.component';

describe('SellosMecanicosComponent', () => {
  let component: SellosMecanicosComponent;
  let fixture: ComponentFixture<SellosMecanicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosMecanicosComponent]
    });
    fixture = TestBed.createComponent(SellosMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
