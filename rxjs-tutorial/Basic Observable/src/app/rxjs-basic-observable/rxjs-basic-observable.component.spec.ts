import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasicObservableComponent } from './rxjs-basic-observable.component';

describe('RxjsBasicObservableComponent', () => {
  let component: RxjsBasicObservableComponent;
  let fixture: ComponentFixture<RxjsBasicObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBasicObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsBasicObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
