import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../AuthService";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  onRegister(name, email) {
    // this.authService... here we can save to firebase as a dummy backend already everything setting up to save data
  }
}
