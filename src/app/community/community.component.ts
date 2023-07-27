import { Component } from '@angular/core';



@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class COMMUNITYComponent {
 
 showDropdown = false;
 selectAll=false
  selectedOption: string=' ';

  options = [
    { label: 'chapter 2', selected: false },
    { label: 'Nothing', selected: false },
    { label: 'something', selected: false },
    { label: 'intro', selected: false }
  ];

    
  get selectedOptions(): string[] {
    return this.options.filter(option => option.selected).map(option => option.label);
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;

  }
 
  onSelectAll() {
    this.options.forEach(option => (option.selected = this.selectAll));
  }

  onOptionChange() {
    this.selectAll = this.options.every(option => option.selected);
  }
onOptionSelected(select:any){
  this.selectedOption = select.target.value
}
}
