import { Component, OnInit, OnChanges } from '@angular/core';
import { SRMTableData } from '../table/SRM-table-data';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { VariableAst } from '@angular/compiler';
// import { DatePipe } from '@angular/common';
// import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
// import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {Observable} from 'rxjs/Observable';
interface setting {
  columns?: any;
  pager: any;
  actions: any;
  attr: any;
}
@Component({
  selector: 'app-softwarereleasematrix',
  templateUrl: './softwarereleasematrix.component.html',
  styleUrls: ['./softwarereleasematrix.component.scss']
})

export class SoftwarereleasematrixComponent implements OnInit,OnChanges {
  page = 1;
  public hist: boolean = false;
  public current: boolean = true;
  public data: Array<any> = SRMTableData;
  public data1: Array<any> = SRMTableData;
  public curclr: string = "rgb(11, 99, 214)";
  public hisclr: string = "rgb(11, 99, 214)";
  public minDate: Date = new Date("01/01/2000");
  public maxDate: Date = new Date();
  public value1: Date;
  public value2: Date;
  public cols=[{name:'name',title:'Name'},
                {name:'type',title:'Type'},
                {name:'vendor',title:'Vendor'},
                {name:'HardwarePlatform',title:'Hardware/Platform'},
                {name:'os',title:'OS'},
                {name:'BaseSWRelease',title:'Base SW Release'},
                {name:'PatchRelease',title:'Patch Release'},
                {name:'DateofUpgrade',title:'Date of Upgrade'},
                {name:'status',title:'Status'},
                {name:'created',title:'Created'},
                {name:'contact',title:'Contact'}];
  public selectedColumns: string[];
  public csoa: boolean;
  dropdownSettings = {
    singleSelection: false,
    idField: 'name',
    textField: 'title',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };

  public columnlist:string[];
  public columnlist1:string[];
  // =['name','type'];
  // ,'vendor','HardwarePlatform','os','BaseSWRelease','PatchRelease','DateofUpgrade','status','created','contact'];
  constructor() {
    // var columnlist:string[]=['name','type'];
    console.log("inside constructor : "+this.columnlist);
  }
  ngOnChanges(columnlist){
    console.log("inside onchanges : "+this.columnlist);
  }

  public settings: setting = {
    columns: {
      name: { title: 'Name' },
      type: { title: 'Type' },
      vendor: { title: 'Vendor' },
      HardwarePlatform: { title: 'Hardware/Platform' },
      os: { title: 'OS' },
      BaseSWRelease: { title: 'Base SW Release', width: "120px" },
      PatchRelease: { title: 'Patch Release' },
      DateofUpgrade: { title: 'Date of Upgrade' },
      status: { title: 'Status' },
      created: { title: 'Created' },
      contact: { title: 'Contact' }
    },
    pager: {
      display: true,
      perPage: 5
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    attr: {
      class: 'table table-bordered table-striped table-sm'
    },
  };
  settingsnew = {
    columns: {
    },
    pager: {
      display: true,
      perPage: 5
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    attr: {
      class: 'table table-bordered table-striped table-sm'
    },
  };
  public datacsv = [{
    'name': 'Sindhu',
    'type': 'sdd'
    // 'vendor': 'Amazon',
    // 'HardwarePlatform': 'sdsfdf',
    // 'os': 'Windows',
    // 'BaseSWRelease': '1.0',
    // 'PatchRelease':'sdsf',
    // 'DateofUpgrade':'01-01-2015',
    // 'status':'Active',
    // 'created':'No',
    // 'contact':9003256466
  }, {
    'name': 'Sandhu',
    'type': 'sdd'
    // 'vendor': 'Flipkart',
    // 'HardwarePlatform': 'sdsfdf',
    // 'os': 'Windows',
    // 'BaseSWRelease': '2.5',
    // 'PatchRelease':'sdsf',
    // 'DateofUpgrade':'01-01-2016',
    // 'status':'Active',
    // 'created':'No',
    // 'contact':9003256466
  }];
    // public datacsv = [
    //   {
    //     name: "Test 1",
    //     age: 13,
    //     average: 8.2,
    //     approved: true,
    //     description: "using 'Content here, content here' "
    //   },
    //   {
    //     name: 'Test 2',
    //     age: 11,
    //     average: 8.2,
    //     approved: true,
    //     description: "using 'Content here, content here' "
    //   },
    //   {
    //     name: 'Test 4',
    //     age: 10,
    //     average: 8.2,
    //     approved: true,
    //     description: "using 'Content here, content here' "
    //   },
    // ];
    public options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Software Release Matrix',
      useBom: true,
      noDownload: true,
      headers:this.columnlist,
      //  ['Name','Age','Average','Approved','Description'],
      nullToEmptyString: true,
    };
 
  ngOnInit(): void {
    console.log("inside ngonint");
    
  }
  OnClickCurr(): void {
    this.current = true;
    this.hist = false;
    this.curclr = "red";
    this.hisclr = "rgb(11, 99, 214)";
  }
  OnClickHist(): void {
    this.hist = true;
    this.current = false;
    this.hisclr = "red";
    this.curclr = "rgb(11, 99, 214)";
  }
  viewclk() {
    this.data1 = this.data.filter(SRMTableData => new Date(SRMTableData.DateofUpgrade) < this.value2 && new Date(SRMTableData.DateofUpgrade) > this.value1);
  }
  onChange1(args) {
    this.value1 = args.value;
  }
  onChange2(args) {
    this.value2 = args.value;
  }

public selectcolumns() {
    this.settingsnew.columns = {};
    this.columnlist=[];
    console.log("in dropdown before :"+this.columnlist);
    console.log(this.selectedColumns);
    this.selectedColumns.forEach((element, index) => {
      this.settingsnew.columns[element['name']] = { title: element['title'] };
      this.columnlist[index]=element['name'];
      var colstr:string=this.columnlist[index]
      // const myObservable=new  Observable(observer=>{observer.next(colstr)});
      // myObservable.subscribe(val=>{this.columnlist1[index]=val})
    });
    // console.log("in dropdown after :"+this.columnlist);
    this.settings = Object.assign({}, this.settingsnew);
    // return this.columnlist;
  }
  // const myObservable=new  Observable(observer=>{observer.next(this.columnlist)});
  // myObservable.subscribe(val=>{console.log("inside subscribe:"+val)})
  // public myObservable= new Observable(this.selectcolumns);
  // selectcolumns.subscribe(
  //   v=>{this.columnlist1=v;}
  // );
    // export(){
    //   new Angular2Csv(this.data, 'mycsv', {headers: (this.columnlist)});
    // }
    // myObservable:Observable<any>;
    
}

