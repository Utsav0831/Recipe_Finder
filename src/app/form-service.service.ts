import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() { }

  openForm$ = new Subject<void>();
  openLform() {
    this.openForm$.next();
  }
}
