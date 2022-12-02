import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() personChange = new EventEmitter();
  person: Person = new Person(
    'Hedi',
    'Khemiri',
    'Étudiant',
    'hheheh',
    'hello',
    'hello',
    'HTML CSS'
  );
  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.personChange.emit(this.person);
  }
}
