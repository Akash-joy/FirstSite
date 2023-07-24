import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOCSComponent } from './docs.component';

describe('DOCSComponent', () => {
  let component: DOCSComponent;
  let fixture: ComponentFixture<DOCSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DOCSComponent]
    });
    fixture = TestBed.createComponent(DOCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
