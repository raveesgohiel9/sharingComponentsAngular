import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  public newAccountSubject = new Subject<any>();

  constructor() { }

  addAccount(account){

    console.log("Account in service:"+account.aName);
    this.newAccountSubject.next(account);
  }
}
