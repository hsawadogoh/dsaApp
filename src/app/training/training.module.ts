import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import {TablesComponent} from "./tables/tables.component";
import {DetailTrainingComponent} from "./detail-training/detail-training.component";
import { CreateUpdateTrainingComponent } from './create-update-training/create-update-training.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TablesComponent,
    DetailTrainingComponent,
    CreateUpdateTrainingComponent,
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TrainingModule { }
