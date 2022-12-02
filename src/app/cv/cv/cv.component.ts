import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';
import { cvs } from '../cvs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Person[] = cvs;
  selected!: Person;
  constructor() {}
  changeSelected(person: Person) {
    this.selected = person;
  }
  ngOnInit(): void {}
}
