import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Person';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-hired',
  templateUrl: './hired.component.html',
  styleUrls: ['./hired.component.css'],
})
export class HiredComponent implements OnInit {
  hired!: Person[];
  selectedProfile!: Person;
  @Output() selectedChange = new EventEmitter();
  constructor(private readonly service: EmbaucheService) {}

  ngOnInit(): void {
    this.hired = this.service.getHired();
  }
  clickItem(person: Person) {
    this.selectedProfile = person;
    this.selectedChange.emit(this.selectedProfile);
  }
}
