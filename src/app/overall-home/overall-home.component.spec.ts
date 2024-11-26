import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallHomeComponent } from './overall-home.component';

describe('OverallHomeComponent', () => {
  let component: OverallHomeComponent;
  let fixture: ComponentFixture<OverallHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
