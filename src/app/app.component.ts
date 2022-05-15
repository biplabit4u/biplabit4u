import { Component, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms'
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service1:MasterService){

  }

  @ViewChild(ChildComponent) listdata !:ChildComponent;
  title = 'Parent To Child';
  /*customername=new FormControl(''); */
  inputemail='';
  inputpassword='';
  inputcredentialobj={"inemail":"","inpassword":""};
  response:any;
  Transferdata(email:any,password:any)
  {
    /*
    this.inputemail=email;
    this.inputpassword=password;
    commented for service
    */
    this.inputcredentialobj={"inemail":email,"inpassword":password}
    /* this.response=this.listdata.updatelist(this.inputcredentialobj); commented for service*/
    this.service1.Savedata(this.inputcredentialobj);

  }

  updateTitle(title:any)
  {
    this.title=title;
  }


}
