import { Component, OnInit } from '@angular/core';
import { TabStripComponent, TabStripTabComponent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-my-company',
  templateUrl: './my-company.component.html',
  styleUrls: ['./my-company.component.scss']
})
export class MyCompanyComponent implements OnInit {
  public position = 'top';
  public alignment = 'end';
  constructor() { }

  ngOnInit() {
  }

  public onTabSelect(e) {
    console.log(e);
  }
}
