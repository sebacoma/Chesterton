import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosCaseteComponent } from './sellos-casete.component';

describe('SellosCaseteComponent', () => {
  let component: SellosCaseteComponent;
  let fixture: ComponentFixture<SellosCaseteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosCaseteComponent]
    });
    fixture = TestBed.createComponent(SellosCaseteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
