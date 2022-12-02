import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Person';
import { cvs } from '../cvs';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() cvs!: Person[];
  selected!: Person | null;
  @Output() selectedChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.selected = cvs[0] ?? null;
  }
  clickItem(person: any) {
    this.selected = person;
    this.selectedChange.emit(this.selected);
  }
}
