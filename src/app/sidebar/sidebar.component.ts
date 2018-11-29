import { Component, OnInit } from '@angular/core';
import { SidebarPageComponent } from '../sidebar-page/sidebar-page.component';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isOpen = true;
  //contentPushed = EventEmitter

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    console.log('sidebar toggled');
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

}
