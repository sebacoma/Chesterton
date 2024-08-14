import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosFuelleComponent } from './sellos-fuelle.component';

describe('SellosFuelleComponent', () => {
  let component: SellosFuelleComponent;
  let fixture: ComponentFixture<SellosFuelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosFuelleComponent]
    });
    fixture = TestBed.createComponent(SellosFuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
