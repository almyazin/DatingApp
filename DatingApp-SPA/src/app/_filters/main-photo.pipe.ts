import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../_models/photo';

@Pipe({
  name: 'mainphoto'
})
export class MainPhotoPipe implements PipeTransform {

  transform(photos: Photo[]): string {
    return photos.find(p => p.isMain).url;
  }

}
