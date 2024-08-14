import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosLodosComponent } from './sellos-lodos.component';

describe('SellosLodosComponent', () => {
  let component: SellosLodosComponent;
  let fixture: ComponentFixture<SellosLodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosLodosComponent]
    });
    fixture = TestBed.createComponent(SellosLodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
