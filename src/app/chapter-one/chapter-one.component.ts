import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chapter-one',
  templateUrl: './chapter-one.component.html',
  styleUrls: ['./chapter-one.component.scss']
})
export class ChapterOneComponent {
  

  searchElement(inputValue: string) {
    const chapterOneContent = document.getElementById('Chapter-one')?.textContent?.toLowerCase(); 
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
