import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltanetComponent } from './deltanet.component';

describe('DeltanetComponent', () => {
  let component: DeltanetComponent;
  let fixture: ComponentFixture<DeltanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeltanetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeltanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
