import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestertonConnectWhatIsComponent } from './chesterton-connect-what-is.component';

describe('ChestertonConnectWhatIsComponent', () => {
  let component: ChestertonConnectWhatIsComponent;
  let fixture: ComponentFixture<ChestertonConnectWhatIsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestertonConnectWhatIsComponent]
    });
    fixture = TestBed.createComponent(ChestertonConnectWhatIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
