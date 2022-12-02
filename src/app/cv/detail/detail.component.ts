import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input()
  person!: Person;
  @Input()
  hire!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
