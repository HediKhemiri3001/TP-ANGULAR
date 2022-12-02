import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string): string {
    let newValue = value.replace(/\s+/g, '');
    if (newValue == '') {
      return '../../assets/images/defaultAvatar.jpg';
    } else return value;
  }
}
