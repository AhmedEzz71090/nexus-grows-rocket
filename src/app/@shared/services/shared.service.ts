import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  breadcrumb: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor() {}
}
