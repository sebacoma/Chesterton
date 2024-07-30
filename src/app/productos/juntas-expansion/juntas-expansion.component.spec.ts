import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntasExpansionComponent } from './juntas-expansion.component';

describe('JuntasExpansionComponent', () => {
  let component: JuntasExpansionComponent;
  let fixture: ComponentFixture<JuntasExpansionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuntasExpansionComponent]
    });
    fixture = TestBed.createComponent(JuntasExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
