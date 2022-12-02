import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  inputValue = 'white';
  valeur = 0;
  background: string = '';
  constructor() {}

  ngOnInit(): void {}
  inputChange(event: any) {
    this.inputValue = event.target.value;
    console.log(event.target.value);
  }
  add(event: any) {
    this.valeur++;
  }
  setColor(event: any) {
    this.background = event;
  }
}
