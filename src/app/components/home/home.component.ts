import { Component, OnInit, Input } from '@angular/core';
import {TransferService} from '../../services/transfer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*
  @Input() accountName:string;
  @Input() accountID:string;
  @Input() accountBalance:number;
  */

  constructor(private trasnferService:TransferService) { }

  ngOnInit() {
  }

  addAccount(account)
  {
    console.log("Accounbt name in Home:"+account.aName);

    this.trasnferService.addAccount(account);
    
  }

}
