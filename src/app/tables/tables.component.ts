import { Component, OnInit } from '@angular/core';
import {Training} from "../models/training.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  trainings: Training[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTrainings();
  }

  getTrainings(): void {
    this.trainings = [
      {
        id: 1,
        name: 'Angular Training',
        description: 'A training for DSA developer',
        tarif: 30000,
        date: '31/10/2022',
      },
      {
        id: 2,
        name: 'Spring Boot Training',
        description: 'A training for DSA developer',
        tarif: 30000,
        date: '31/10/2022',
      },
      {
        id: 3,
        name: 'Flutter Training',
        description: 'A training for DSA developer',
        tarif: 30000,
        date: '31/10/2022',
      },
    ];
  }

  navigateToDetail(t: Training): void {
    this.router.navigate(['trainings', t.id]);
  }

}
