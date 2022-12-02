import { Component, Input, OnInit } from '@angular/core';
import { EmbaucheService } from 'src/app/cv/services/embauche.service';
import { Person } from 'src/app/Person';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css'],
})
export class CarteVisiteComponent implements OnInit {
  @Input()
  person!: Person;
  @Input()
  hire!: boolean;
  constructor(
    private readonly service: EmbaucheService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  hireP(person: Person) {
    if (this.service.hire(person)) {
      this.toastr.success(`${person.name} is hired!`, 'Success!');
    } else {
      this.toastr.error('This person is already hired.', 'Error!');
    }
  }
}
