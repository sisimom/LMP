import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emaildelivery',
  templateUrl: './emaildelivery.component.html',
  styleUrls: ['./emaildelivery.component.scss']
})

export class EmaildeliveryComponent implements OnInit {
  emailid: string = '';
  constructor() { }

  ngOnInit() {
    this.emailid = localStorage.getItem('emailid');
  }
}
