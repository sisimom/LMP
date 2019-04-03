import { Component, OnInit } from '@angular/core';
import { SRMTableData } from '../table/SRM-table-data';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// import { DatePipe } from '@angular/common';
// import { Angular5Csv } from 'angular5-csv/Angular5-csv';
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

export class SoftwarereleasematrixComponent implements OnInit {
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
  constructor() {
  }

  public settings: setting = {
    columns: {
      name: { title: 'Name' },
      type: { title: 'Type' },
      vendor: { title: 'Vendor' },
      HardwarePlatform: { title: 'Hardware/Platform' },
      OS: { title: 'OS' },
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
  ngOnInit(): void {
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

  selectcolumns() {
    this.settingsnew.columns = {};
    // console.log(this.selectedColumns);
    this.selectedColumns.forEach((element, index) => {
      // console.log(element['name']);
      this.settingsnew.columns[element['name']] = { title: element['title'] };
    });
    this.settings = Object.assign({}, this.settingsnew);
  }
//   public options = { 
//     fieldSeparator: ',',
//     quoteStrings: '"',
//     decimalseparator: '.',
//     showLabels: true, 
//     showTitle: true,
//     title: 'Your title',
//     useBom: true,
//     noDownload: true,
//     headers: ["First Name", "Last Name", "ID"],
//     nullToEmptyString: true,
//   };
//   export(){
//   new Angular5Csv(this.data, "filename", this.options);
// }
}

