import { WebserviceService } from './../webservice.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

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

  constructor(private navCtrl: NavController,
              private loginService: WebserviceService,
              private toastCtrl: ToastController
    ) {
    localStorage.clear();
  }

  ngOnInit() {
  }

  login() {

    const body = new URLSearchParams();
    body.append('email', this.email);
    body.append('password', this.password);

    this.loginService.postData(body, 'login').then((result) => {
      result = '{"status":true,"data":{"id":"1","name":"mishraaaaaa123","phone":"7004814010","email":"abc@gamail.com","password":"12","sex":"2","aadhar_number":"","pan_number":"","image":"","address":"Ratu ROad Ranchi","city":" 339","state":"20","status":"1","role_id":"1","assigned_mtc_id":"1"}}';

      this.responseData = JSON.parse(result);
      if (this.responseData.status) {
        const role_id = this.responseData.data.role_id;
        localStorage.setItem('mtcUserData', JSON.stringify(this.responseData.data));
        if (role_id === '1') {
          this.navCtrl.navigateForward('home');
        } else {
          this.presentToast('You have entered invalid login details.');
        }
      } else {
        this.presentToast('You have entered invalid login details.');
      }
    });
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
