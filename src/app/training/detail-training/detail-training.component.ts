import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TrainingService} from "../../services/training.service";
import {Training} from "../../models/training.model";

@Component({
  selector: 'app-detail-training',
  templateUrl: './detail-training.component.html',
  styleUrls: ['./detail-training.component.scss']
})
export class DetailTrainingComponent implements OnInit {
  trainingId!: number;
  currentTraining!: Training;

  constructor(
    private activatedRoute: ActivatedRoute,
    private trainingService: TrainingService,
  ) { }

  ngOnInit(): void {
    this.trainingId = +this.activatedRoute.snapshot.params['trainingId'];
    this.currentTraining = new Training();
    this.getOneTraining();
  }

  getOneTraining() {
    this.trainingService.getOne(this.trainingId).subscribe({
      next: response => {
        if (response.body !== null) {
          this.currentTraining = response.body;
          console.log(this.currentTraining);
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
