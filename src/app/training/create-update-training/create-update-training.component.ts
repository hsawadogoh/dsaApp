import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Training} from "../../models/training.model";
import {TrainingService} from "../../services/training.service";

@Component({
  selector: 'app-create-update-training',
  templateUrl: './create-update-training.component.html',
  styleUrls: ['./create-update-training.component.scss']
})
export class CreateUpdateTrainingComponent implements OnInit {
  formTraining!: FormGroup;
  training!: Training;

  constructor(
    private activatedModal: NgbActiveModal,
    private fb: FormBuilder,
    private trainingService: TrainingService,
  ) { }

  ngOnInit(): void {
    console.log(this.training);
    this.initFormGroup();
  }

  initFormGroup() {
    this.formTraining = this.fb.group({
      name: [null, [Validators.required]],
      description: null,
      tarif: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });

    if (this.training !== null) {
      this.formTraining.patchValue({
        name: this.training.name,
        description: this.training.description,
        tarif: this.training.tarif,
        date: this.training.date,
      });
    } else {
      this.training = new Training();
    }
  }

  onClose(param: boolean) {
    this.activatedModal.close(param);
  }

  onGetInfos() {
    this.training.name = this.formTraining.value.name;
    this.training.description = this.formTraining.value.description;
    this.training.tarif = this.formTraining.value.tarif;
    this.training.date = this.formTraining.value.date;

    if (this.training.id) {
      this.onUpdateTraining();
    } else {
      this.onSaveTraining();
    }
  }

  /**
   * On update an existing training
   * @private
   */
  private onUpdateTraining() {
    this.trainingService.update(this.training).subscribe({
      next: response => {
        console.log(response.status);
        console.log(response.body);
        if (response.body !== null && response.body.id) {
          this.onClose(true);
        }
      },
      error: error => {
        console.error(error);
      },
      complete: () => {

      }
    });
  }

  /**
   * On create a new training
   * @private
   */
  private onSaveTraining() {
    this.trainingService.create(this.training).subscribe({
      next: response => {
        console.log(response.status);
        console.log(response.body);
        if (response.body !== null && response.body.id) {
          this.onClose(true);
        }
      },
      error: error => {
        console.error(error);
      },
      complete: () => {

      }
    });
  }
}
