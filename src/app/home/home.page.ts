import { NavController } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

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

  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;

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

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
