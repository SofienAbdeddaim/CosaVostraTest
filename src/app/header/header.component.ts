import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nameToggleMenu: string;
  constructor() { }

  ngOnInit() {
    this.nameToggleMenu = 'Menu';
  }

  toggleMenu(value) {
    if (value === false) this.nameToggleMenu = 'Menu';
    else this.nameToggleMenu = 'Fermer';
  }
}
