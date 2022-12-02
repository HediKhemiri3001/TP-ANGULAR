import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'projetCours';
  person!: Person;
  ngOnInit() {}
  change(value: Person) {
    this.person = value;
  }
}
