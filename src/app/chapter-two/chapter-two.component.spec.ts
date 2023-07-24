import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwoComponent } from './chapter-two.component';

describe('ChapterTwoComponent', () => {
  let component: ChapterTwoComponent;
  let fixture: ComponentFixture<ChapterTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapterTwoComponent]
    });
    fixture = TestBed.createComponent(ChapterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
