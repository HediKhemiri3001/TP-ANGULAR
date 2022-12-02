import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { AppModule } from '../app.module';
import { CarteVisiteModule } from '../carte-visite/carte-visite.module';
import { CvDirective } from '../cv.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { HiredComponent } from './hired/hired.component';

@NgModule({
  declarations: [
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    CvDirective,
    DefaultImagePipe,
    HiredComponent,
  ],
  imports: [CommonModule, CarteVisiteModule],
  exports: [CvComponent, HiredComponent],
})
export class CvModule {}
