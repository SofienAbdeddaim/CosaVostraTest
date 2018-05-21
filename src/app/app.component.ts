import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  showContent: boolean;
  inscriptionPane: boolean;
  showRegister: boolean;
  ngOnInit() {
    this.showContent = true;
    this.inscriptionPane = false;
    this.showRegister = false;
  }

  toggleMenu(value) {
    if (value) {
      this.showContent = false;
    } else {
      setTimeout( () => {
        this.showContent = true;
      }, 400);
    }
  }

  showInscriptionPane() {
    this.inscriptionPane = true;
  }

  onRegister() {
    this.showContent = false;
    this.inscriptionPane = false;
    this.showRegister = true;
  }
}
