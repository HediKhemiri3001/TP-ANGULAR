import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input()
  person!: Person;
  @Output() emitPerson = new EventEmitter<Person>();
  constructor() {}
  emit() {
    this.emitPerson.emit(this.person);
  }
  ngOnInit(): void {}
}
