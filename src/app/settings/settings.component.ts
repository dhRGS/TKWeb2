import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  newPanelAllowed = false;

  constructor() {
    setTimeout(() => {
      this.newPanelAllowed = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
