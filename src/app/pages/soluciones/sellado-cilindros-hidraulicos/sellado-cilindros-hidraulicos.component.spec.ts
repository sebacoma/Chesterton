import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelladoCilindrosHidraulicosComponent } from './sellado-cilindros-hidraulicos.component';

describe('SelladoCilindrosHidraulicosComponent', () => {
  let component: SelladoCilindrosHidraulicosComponent;
  let fixture: ComponentFixture<SelladoCilindrosHidraulicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelladoCilindrosHidraulicosComponent]
    });
    fixture = TestBed.createComponent(SelladoCilindrosHidraulicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
