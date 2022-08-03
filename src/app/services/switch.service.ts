import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  // Observable object
  $modal = new EventEmitter<any>();
}
