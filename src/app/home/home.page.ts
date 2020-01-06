import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userDetails: any;
  loggedUser = '';
  loggedUserRole = '';
  loggedUserContact = '+91-XXXXXXXXX';

  constructor(private nav: NavController) {
    // Load LoggedIn User Details else Logout
    const data = JSON.parse(localStorage.getItem('mtcUserData'));
    if (data != null) {
      this.userDetails = data;
      this.loggedUser =  this.userDetails.name;
      this.loggedUserRole =  this.userDetails.role_id === '1' ? 'ANM' : 'Admin';
      this.loggedUserContact = this.userDetails.phone;
    } else {
      this.nav.navigateRoot('login');
    }

  }

}
