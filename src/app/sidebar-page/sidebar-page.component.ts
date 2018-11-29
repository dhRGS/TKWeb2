import { Component, OnInit } from '@angular/core';
import { SidebarPanelComponent } from '../sidebar-panel/sidebar-panel.component';

@Component({
  selector: 'app-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent implements OnInit {
  allowNewPanel = false;

  constructor() {
    setTimeout(() => {
      this.allowNewPanel = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
