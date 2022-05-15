import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { MasterService } from '../service/master.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() emaildata:any; 
  @Input() passdata:any;
  @Input() credentialobj:any;

  @Output() dataupdateevent=new EventEmitter<string>();
  listArray=[{"inemail":"","inpassword":""}];

  constructor(private service:MasterService) { 
    //this.listArray=this.service.Getdata();
  }

  updatelist(obj:any)
  {
    this.listArray.push(obj);
    return obj.inemail +" is added";
  }

  ngOnInit(): void {
  }

}
