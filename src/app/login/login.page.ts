import { HomePage } from './../home/home.page';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: '';
  password: '';
  responseData: any;

  userDetails: any;
  loggedUser = 'Test';
  loggedUserRole = 'ANM';
  loggedUserContact = '+91-XXXXXXXXX';
  constructor(public navCtrl: NavController, public loginService: LoginService) { 
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data != null) {
      this.userDetails = data;
      this.loggedUser =  this.userDetails.name;
      this.loggedUserRole =  this.userDetails.role_id === '1' ? 'ANM' : 'Admin';
      this.loggedUserContact = this.userDetails.phone;
    }
  }

  ngOnInit() {
  }

  login() {

    const body = new URLSearchParams();
    body.append('email', this.email);
    body.append('password', this.password);

    this.loginService.postData(body).then((result) => {
      this.responseData = JSON.parse(result);
      if(this.responseData.status) {
        const role_id = this.responseData.data.role_id;
        localStorage.setItem('userData', JSON.stringify(this.responseData.data));
        if (role_id === '1') {
          this.navCtrl.navigateForward('home');
        } else {
          console.log('Invalid Username & Password.')
        }
      }
    });
  }

}
