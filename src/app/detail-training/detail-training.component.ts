import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-training',
  templateUrl: './detail-training.component.html',
  styleUrls: ['./detail-training.component.scss']
})
export class DetailTrainingComponent implements OnInit {
  trainingId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.trainingId = +this.activatedRoute.snapshot.params['trainingId'];
  }

}
