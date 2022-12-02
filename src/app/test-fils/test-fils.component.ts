import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-fils',
  templateUrl: './test-fils.component.html',
  styleUrls: ['./test-fils.component.css'],
})
export class TestFilsComponent implements OnInit {
  @Input()
  color = 'white';
  @Output()
  buttonClicked = new EventEmitter();
  favoriteColor: string = '';
  taille: string = '12';
  police: string = 'arial';
  constructor() {}
  style() {
    return {
      'font-size': this.taille + 'px',
      'font-family': this.police,
      color: this.favoriteColor,
    };
  }
  incrementer() {
    this.buttonClicked.emit(this.color);
  }
  favorite() {
    this.buttonClicked.emit(this.favoriteColor);
  }
  ngOnInit(): void {}
}
