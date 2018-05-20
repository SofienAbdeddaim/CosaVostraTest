import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggled = new EventEmitter<boolean>();
  nameToggleMenu: string;
  constructor() { }

  ngOnInit() {
    this.nameToggleMenu = 'Menu';
  }

  toggleMenu(value) {
    this.menuToggled.emit(value);
    if (value === false) {
      this.nameToggleMenu = 'Menu';
    } else {
      this.nameToggleMenu = 'Fermer';
    }
  }
}
