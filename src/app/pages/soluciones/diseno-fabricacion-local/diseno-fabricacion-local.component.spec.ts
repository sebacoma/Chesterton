import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoFabricacionLocalComponent } from './diseno-fabricacion-local.component';

describe('DisenoFabricacionLocalComponent', () => {
  let component: DisenoFabricacionLocalComponent;
  let fixture: ComponentFixture<DisenoFabricacionLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenoFabricacionLocalComponent]
    });
    fixture = TestBed.createComponent(DisenoFabricacionLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
