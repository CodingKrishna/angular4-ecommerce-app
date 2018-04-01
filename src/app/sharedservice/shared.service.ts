import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  //observable string source
  private search = new Subject<string>();

  // observable string streams
  searchString$ = this.search.asObservable();

  // service message commands
  publishSearchString(searchString: string) {
    this.search.next(searchString);
  }

}