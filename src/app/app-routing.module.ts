import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChartsComponent} from "./charts/charts.component";
import {ErrorComponent} from "./error/error.component";
import {TablesComponent} from "./tables/tables.component";
import {DetailTrainingComponent} from "./detail-training/detail-training.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title:  'dsaApp - Home',
    pathMatch: "full"
  },
  {
    path: 'charts',
    component: ChartsComponent,
    title: 'dsaApp - Charts'
  },
  {
    path: 'tables',
    component: TablesComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'trainings/:trainingId',
    component: DetailTrainingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
