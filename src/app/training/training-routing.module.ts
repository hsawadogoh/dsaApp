import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailTrainingComponent} from "./detail-training/detail-training.component";
import {TablesComponent} from "./tables/tables.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
  },
  {
    path: ':trainingId',
    component: DetailTrainingComponent,
    canActivate: [AuthGuard],
    title: 'Detail training',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
