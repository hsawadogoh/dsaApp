import { Component, OnInit } from '@angular/core';
import {Training} from "../../models/training.model";
import {Router} from "@angular/router";
import {TrainingService} from "../../services/training.service";
import {Title} from "@angular/platform-browser";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateUpdateTrainingComponent} from "../create-update-training/create-update-training.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  trainings: Training[] = [];
  allTrainings$!: Observable<Training[]>;

  constructor(
    private router: Router,
    private trainingService: TrainingService,
    private title: Title,
    private modal: NgbModal,
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle("Trainings");
    this.allTrainings$ = this.trainingService.trainingList$;
    console.log(this.trainingService.trainingList$);
    // this.getListTrainings();
  }

  getListTrainings() {
    this.trainingService.getAllTrainings().subscribe({
      next: response => {
        if (response.body !== null) {
          this.trainings = response.body;
        }
      },
      error: error => {

      }
    });
  }


  navigateToDetail(t: Training): void {
    this.router.navigate(['trainings', t.id]);
  }

  async onOpenCreateUpdateTraining(tr: Training | null) {
    const currentModal = await this.modal.open(CreateUpdateTrainingComponent, { size: 'lg', centered: true, backdrop: 'static' });
    currentModal.componentInstance.training = tr;
    currentModal.result.then(
      response => {
        if (response) {
          // this.getListTrainings();
        }
      }
    );
  }

  onDelete(t: Training) {
    this.trainingService.delete(t.id).subscribe({
      next: response => {
        console.log(response.body);
      }
    });
  }
}
