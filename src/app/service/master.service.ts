import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  listArray=[{"inemail":"biplabit4u@gmail.com","inpassword":"test123"}];

  constructor(service:MasterService) {
   // this.listArray=service.Getdata();
   }

  

  Getdata()
  {
    return this.listArray;
  }

  Savedata(input:any)
  {
    return this.listArray.push(input);
  }
}
