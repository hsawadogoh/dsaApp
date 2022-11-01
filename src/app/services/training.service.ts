import { Injectable } from '@angular/core';
import {Training} from "../models/training.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  trainings: Training[] = [];
  API_URL = 'http://localhost:8089/api';
  trainingList$: BehaviorSubject<Training[]> = new BehaviorSubject<Training[]>([]);

  constructor(
    private http: HttpClient,
  ) {
    this.init();
  }

  init() {
    this.http.get<Training[]>(`${this.API_URL}/training`, { observe: "response" }).subscribe({
      next: response => {
        if (response.body) {
          this.trainingList$.next(response.body);
          console.log(response.body);
        }
      }
    });
  }

  getTrainings(): Training[] {
    this.trainings = [
      {
        id: 1,
        name: 'Angular Training',
        description: 'A training for DSA developer',
        tarif: 30000,
        date: '2022-10-22',
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
    return this.trainings;
  }

  getAllTrainings(): Observable<HttpResponse<Training[]>> {
    return this.http.get<Training[]>(`${this.API_URL}/training`, { observe: "response" });
  }

  create(training: Training): Observable<HttpResponse<Training>> {
    return this.http.post<Training>(`${this.API_URL}/trainings`, training, { observe: "response" }).pipe(
      tap(() => this.init()),
    );
  }

  update(training: Training): Observable<HttpResponse<Training>> {
    return this.http.put<Training>(`${this.API_URL}/trainings`, training, { observe: "response" }).pipe(
      tap(() => this.init()),
    );
  }

  getOne(trainingId: number): Observable<HttpResponse<Training>> {
    return this.http.get<Training> (`${this.API_URL}/trainings/${trainingId}`, { observe: "response" });
  }

  delete(trainingId: number | undefined): Observable<HttpResponse<boolean>> {
    return this.http.delete<boolean>(`${this.API_URL}/trainings/${trainingId}`, { observe: "response" }).pipe(
      tap(() => this.init()),
    );
  }
}
