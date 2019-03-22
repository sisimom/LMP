import { Component, OnInit } from '@angular/core';
import { SRMTableData } from '../table/SRM-table-data';
import { DatePipe } from '@angular/common';

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
  public data1:Array<any> = SRMTableData ;
  public curclr:string="rgb(11, 99, 214)";
  public hisclr:string="rgb(11, 99, 214)";
  public minDate: Date = new Date ("01/01/2000");
  public maxDate: Date = new Date ();
  public value1: Date ;
  public value2: Date ;

  constructor(private datePipe: DatePipe) {
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
      perPage:5
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
    this.hisclr="rgb(11, 99, 214)";
  }
  OnClickHist():void{
    this.hist=true;
    this.current=false;
    this.hisclr="red";
    this.curclr="rgb(11, 99, 214)";
  }
  viewclk(){
    this.data1=this.data.filter(SRMTableData=>new Date(SRMTableData.DateofUpgrade)<this.value2 && new Date(SRMTableData.DateofUpgrade)>this.value1);
  }
  onChange1(args){
    this.value1=args.value;
  }
  onChange2(args){
    this.value2=args.value;
  }
}
