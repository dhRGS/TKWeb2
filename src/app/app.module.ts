import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarPanelComponent } from './sidebar-panel/sidebar-panel.component';
import { ChartComponent } from './chart/chart.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';
/* below unrequired see comment below */
// import { TabStripComponent, TabStripTabComponent } from '@progress/kendo-angular-layout';
import { MyCompanyComponent } from './my-company/my-company.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    SidebarPanelComponent,
    ChartComponent,
    SidebarPageComponent,
    /*  below are unrequired individually 
    /   as they are included in the layout module
    */
    // TabStripComponent,
    // TabStripTabComponent,
    MyCompanyComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
