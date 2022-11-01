import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChartsComponent} from "./charts/charts.component";
import {ErrorComponent} from "./error/error.component";
import {TablesComponent} from "./training/tables/tables.component";
import {DetailTrainingComponent} from "./training/detail-training/detail-training.component";
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
    path: 'trainings',
    loadChildren: () => import('./training/training.module').then(
      m => m.TrainingModule,
    ),
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
