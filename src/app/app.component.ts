import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dsaApp';


  // Types
  nom: string | undefined;
  libelle!: string;
  users: string[] = [];



  // Fonctions
  getUsername(): string {
    return "";
  }


  // Others

  constructor() {
    this.libelle = "Bonjour " +
      "Comment " +
      "";
  }
}
