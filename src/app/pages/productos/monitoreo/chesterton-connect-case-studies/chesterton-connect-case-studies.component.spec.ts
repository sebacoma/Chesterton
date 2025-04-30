import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestertonConnectCaseStudiesComponent } from './chesterton-connect-case-studies.component';

describe('ChestertonConnectCaseStudiesComponent', () => {
  let component: ChestertonConnectCaseStudiesComponent;
  let fixture: ComponentFixture<ChestertonConnectCaseStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestertonConnectCaseStudiesComponent]
    });
    fixture = TestBed.createComponent(ChestertonConnectCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
