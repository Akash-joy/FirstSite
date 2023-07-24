import { Component} from '@angular/core';
import { ForcheckboxService } from '../forcheckbox.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {  
  searchTerm: string = '';
  showCheckbox: boolean = true;
  showcheck:boolean=false
  isLoggedIn: boolean=false

  constructor(private checkboxService: ForcheckboxService){}

  onCheckboxChange() {
    this.checkboxService.setCheckboxState(this.showCheckbox);
  }


 
}
