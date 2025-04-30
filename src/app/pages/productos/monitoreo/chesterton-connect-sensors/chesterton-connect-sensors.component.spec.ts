import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestertonConnectSensorsComponent } from './chesterton-connect-sensors.component';

describe('ChestertonConnectSensorsComponent', () => {
  let component: ChestertonConnectSensorsComponent;
  let fixture: ComponentFixture<ChestertonConnectSensorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestertonConnectSensorsComponent]
    });
    fixture = TestBed.createComponent(ChestertonConnectSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
