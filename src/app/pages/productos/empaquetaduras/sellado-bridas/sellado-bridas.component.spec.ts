import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelladoBridasComponent } from './sellado-bridas.component';

describe('SelladoBridasComponent', () => {
  let component: SelladoBridasComponent;
  let fixture: ComponentFixture<SelladoBridasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelladoBridasComponent]
    });
    fixture = TestBed.createComponent(SelladoBridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
