import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellosPistonesComponent } from './sellos-pistones.component';

describe('SellosPistonesComponent', () => {
  let component: SellosPistonesComponent;
  let fixture: ComponentFixture<SellosPistonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellosPistonesComponent]
    });
    fixture = TestBed.createComponent(SellosPistonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
