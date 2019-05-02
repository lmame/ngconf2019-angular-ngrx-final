import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Will be called by the effect.
// that will wait 10 seconds and change the banana state
// calling the RotService service.
// We are returning an observsable.
@Injectable({providedIn: 'root'})
export class RotService {
  rotBanana(): Observable<any> {
    console.log('ROT BANANA');
    const milliseconds = 10000; // 10 seconds
    return Observable.create(observer => {
      setTimeout(() => {
        console.log('Done waiting');
        observer.next('brown');
        observer.complete();
      }, milliseconds);
    });
  }
}