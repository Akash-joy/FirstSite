import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLOGComponent } from './blog.component';

describe('BLOGComponent', () => {
  let component: BLOGComponent;
  let fixture: ComponentFixture<BLOGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BLOGComponent]
    });
    fixture = TestBed.createComponent(BLOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
