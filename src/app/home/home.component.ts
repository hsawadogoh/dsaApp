import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  libelle!: string;
  sizes: number[] = [];
  montant = 2000000;
  date =  new Date();

  constructor() { }

  ngOnInit(): void {
    this.libelle = "Welcome to my App";
    this.sizes[0] = 1;
    this.sizes[1] = 2;
    this.sizes[2] = 3;
  }

  onGetClick(s: number) {
    this.libelle = "Dashboard N°" + s + " clicked !" ;
  }
}
