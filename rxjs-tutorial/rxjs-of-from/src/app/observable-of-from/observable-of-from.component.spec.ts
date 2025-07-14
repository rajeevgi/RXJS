import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOfFromComponent } from './observable-of-from.component';

describe('ObservableOfFromComponent', () => {
  let component: ObservableOfFromComponent;
  let fixture: ComponentFixture<ObservableOfFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableOfFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOfFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
