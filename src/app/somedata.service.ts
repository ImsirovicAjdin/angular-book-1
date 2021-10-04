import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomedataService {

  constructor() { }

  someMethodFromService(): number {
    return 42;
  }
}
