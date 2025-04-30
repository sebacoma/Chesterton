import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestertonConnectRemoteAccessibilityComponent } from './chesterton-connect-remote-accessibility.component';

describe('ChestertonConnectRemoteAccessibilityComponent', () => {
  let component: ChestertonConnectRemoteAccessibilityComponent;
  let fixture: ComponentFixture<ChestertonConnectRemoteAccessibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestertonConnectRemoteAccessibilityComponent]
    });
    fixture = TestBed.createComponent(ChestertonConnectRemoteAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
