import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, CarteVisiteComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormComponent, CarteVisiteComponent],
})
export class CarteVisiteModule {}
