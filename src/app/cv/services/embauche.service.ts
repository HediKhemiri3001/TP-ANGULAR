import { Injectable } from '@angular/core';
import { Person } from '../../Person';

const HIRED: Person[] = [];

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  constructor() {}
  hire(person: Person): boolean {
    if (HIRED.find((value) => value == person) == person) {
      return false;
    }
    HIRED.push(person);
    return true;
  }
  getHired(): Person[] {
    return HIRED;
  }
}
