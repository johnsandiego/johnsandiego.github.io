import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataTransferService {
  private subject = new Subject<any>();
  
  sendNumber(number: number): void{
    this.subject.next({text: number});
  }

  getNumber(): Observable<any>{
    return this.subject.asObservable();
  }
}
