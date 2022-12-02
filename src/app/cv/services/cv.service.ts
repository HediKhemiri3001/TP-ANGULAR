import { Injectable } from '@angular/core';
import { Person } from '../../Person';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor() {}
}
export const cvs = [
  new Person(
    'Mohamed Hedi',
    'Khemiri',
    'Etudiant',
    '',
    'hello',
    'hello',
    'HTML CSS'
  ),
  new Person('Naim ', 'Dali', 'Etudiant', '', 'hello', 'hello', 'JS React'),
];
