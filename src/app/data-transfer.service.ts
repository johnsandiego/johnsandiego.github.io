import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum component_name{
  pregenerate =  "pregenerate",
  generate = "generate",
  postgenerate = "postgenerate"
}
@Injectable({ providedIn: 'root' })
export class DataTransferService {
  private subject = new Subject<any>();

  sendMessage(message: component_name) {
    let componentName: component_name = message;
    this.subject.next(componentName);
  }

  getMessage(): Observable<component_name> {
      return this.subject.asObservable();
  }
}
