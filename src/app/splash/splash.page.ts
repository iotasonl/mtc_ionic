import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) {
    this.loadSplashScreen();
    localStorage.clear();
  }

  ngOnInit() {
  }

  loadSplashScreen() {
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 3000);
  }

}
