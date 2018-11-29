import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-panel',
  templateUrl: './sidebar-panel.component.html',
  styleUrls: ['./sidebar-panel.component.scss']
})
export class SidebarPanelComponent implements OnInit {
  panelID = 10;
  panelVisible = true;
  panelTitle = 'My First Panel';
  constructor() { }

  ngOnInit() {
  }

}
