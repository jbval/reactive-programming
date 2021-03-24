import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDebugComponent } from './rxjs-debug.component';

describe('RxjsDebugComponent', () => {
  let component: RxjsDebugComponent;
  let fixture: ComponentFixture<RxjsDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsDebugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
