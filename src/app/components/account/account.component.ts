import { Component, OnInit , Input} from '@angular/core';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  public accountRecords:AccountRecords[] = [
    {aName:"Ravi",aID:"A10000",aBalance:1000000},
    {aName:"Tanvi",aID:"A100011",aBalance:1000000},
    {aName:"Khanak",aID:"A11111",aBalance:1000000}
  ];

  
  constructor(private transferService:TransferService) {

   }

  ngOnInit() {
    
    this.transferService.newAccountSubject.subscribe(
      data=>{
        //console.log("Data received:"+data.aName);
        /*
        this.accountRecords.aName = data.aName;
        this.accountRecords.aID = data.aID;
        this.accountRecords.aBalance = data.aBalance;
        */
       this.accountRecords.push({aName:data.aName,aID:data.aID,aBalance:data.aBalance});
      })
  }
  
}
interface AccountRecords{
  aName:string;
  aID:string;
  aBalance:number;
}
