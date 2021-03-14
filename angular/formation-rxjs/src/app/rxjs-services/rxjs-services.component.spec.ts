import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsServicesComponent } from './rxjs-services.component';

describe('RxjsServicesComponent', () => {
  let component: RxjsServicesComponent;
  let fixture: ComponentFixture<RxjsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
