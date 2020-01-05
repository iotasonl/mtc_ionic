import { Router } from '@angular/router';
import { LoginPage } from './login/login.page';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export interface SubMenuItem {
  title: string;
  link: string;
  icon: string;
}

export interface MenuItem {
  title: string;
  link: string;
  icon: string;
  SubMenuItem: any;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = LoginPage;
  appMenuItems: Array<MenuItem>;
  childCareMenuItem: Array<SubMenuItem>;

  userDetails: any;

  loggedUser = 'Test';
  loggedUserRole = 'ANM';
  loggedUserContact = '+91-XXXXXXXXX';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();

    this.childCareMenuItem = [
      {title: 'Home', link: 'home', icon: 'home' }
    ]

    this.appMenuItems = [
      {title: 'Home', link: 'home', icon: 'home', SubMenuItem: null },
      {title: 'Child Care', link: '#', icon: 'person', SubMenuItem: null },
      {title: 'Stock', link: '#', icon: 'apps', SubMenuItem: null },
      {title: 'Utilities', link: '#', icon: 'archive', SubMenuItem: null },
      {title: 'Reports', link: '#', icon: 'podium', SubMenuItem: null },
    ];

    const data = JSON.parse(localStorage.getItem('userData'));
    if (data != null) {
      this.userDetails = data;
      this.loggedUser =  this.userDetails.name;
      this.loggedUserRole =  this.userDetails.role_id === '1' ? 'ANM' : 'Admin';
      this.loggedUserContact = this.userDetails.phone;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.router.navigateByUrl(page.link);
  }

  onLogout() {
    // Clear all login data from browser's
    // localStorage and navigate to login Page
    localStorage.clear();
    setTimeout(() => this.router.navigateByUrl(this.rootPage), 1000);
  }

}
