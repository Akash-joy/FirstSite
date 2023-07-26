import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chapter-two',
  templateUrl: './chapter-two.component.html',
  styleUrls: ['./chapter-two.component.scss']
})
export class ChapterTwoComponent {
  searchElement(inputValue: string) {
    const chapterOneContent = document.getElementById('chapter2')?.textContent?.toLowerCase(); 
  if(chapterOneContent){
    if (chapterOneContent.includes(inputValue.toLowerCase())) {
      alert('Element found in Chapter One!');
    } else {
      alert('Element not found in Chapter One!');
    }
  }
  }
  constructor(private chapterOneElement: ElementRef) {}
}
