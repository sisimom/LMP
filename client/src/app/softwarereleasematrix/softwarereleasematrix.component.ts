import { Component, OnInit } from '@angular/core';
import { SRMTableData } from '../table/SRM-table-data';

@Component({
  selector: 'app-softwarereleasematrix',
  templateUrl: './softwarereleasematrix.component.html',
  styleUrls: ['./softwarereleasematrix.component.scss']
})
export class SoftwarereleasematrixComponent implements OnInit {
  page = 1;
  public hist:boolean=false;
  public current:boolean=true;
  public data:Array<any> = SRMTableData;
  public curclr:string="blue";
  public hisclr:string="blue";
  constructor() {
    // this.data.setPaging(1,5, true);
   }
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      type: {
        title: 'Type'
      },
      vendor: {
        title: 'Vendor'
      },
      HardwarePlatform: {
        title: 'Hardware/Platform'
      },
      OS: {
        title: 'OS'
      },
      BaseSWRelease: {
        title: 'Base SW Release',width:"120px"
      },
      PatchRelease: {
        title: 'Patch Release'
      },
      DateofUpgrade: {
        title: 'Date of Upgrade'
      },
      Status: {
        title: 'Status'
      },
      Created: {
        title: 'Created'
      },
      Contact: {
        title: 'Contact'
      }
    },
    pager:{
      display:true,
      perPage:7
      },
    actions:{
        add:false,
        edit:false,
        delete:false
      },
    attr: {
        class: 'table table-bordered table-striped table-sm'
      },
  };
  ngOnInit() :void{
  }

  OnClickCurr():void{
    this.current=true;
    this.hist=false;
    this.curclr="red";
    this.hisclr="blue";
  }
  OnClickHist():void{
    this.hist=true;
    this.current=false;
    this.hisclr="red";
    this.curclr="blue";
  }
}
