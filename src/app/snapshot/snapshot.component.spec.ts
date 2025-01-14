import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotComponent } from './snapshot.component';

describe('SnapshotComponent', () => {
  let component: SnapshotComponent;
  let fixture: ComponentFixture<SnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapshotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
