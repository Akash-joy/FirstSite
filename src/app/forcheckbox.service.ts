import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForcheckboxService {

     checkboxState = new BehaviorSubject<boolean>(true);
     checkboxState1 = this.checkboxState.asObservable();
    
    setCheckboxState(state: boolean) {
      this.checkboxState.next(state);
    }
  }

