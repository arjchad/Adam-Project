import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBarComponent } from './s-bar.component';

describe('SBarComponent', () => {
  let component: SBarComponent;
  let fixture: ComponentFixture<SBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
