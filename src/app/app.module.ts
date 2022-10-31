import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { ChartsComponent } from './charts/charts.component';
import { ErrorComponent } from './error/error.component';
import { TablesComponent } from './tables/tables.component';
import { DetailTrainingComponent } from './detail-training/detail-training.component';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ChartsComponent,
    ErrorComponent,
    TablesComponent,
    DetailTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
