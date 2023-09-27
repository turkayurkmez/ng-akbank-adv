import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './models/project.model';
import { Observable } from 'rxjs';
import { projects } from './models/mocks/project.mock';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Project[] | null | undefined, searchKey: string): Project[] | undefined | null {

    return value = searchKey != undefined ?
      value?.filter(p => p.name?.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()))
      :
      value








  }

}
