import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  showContent: boolean;
  ngOnInit() {
    this.showContent = true;
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
}
