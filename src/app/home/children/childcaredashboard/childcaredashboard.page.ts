import { Router } from '@angular/router';
import { Component } from '@angular/core';

export interface DashboardItem {
  title: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-childcaredashboard',
  templateUrl: './childcaredashboard.page.html',
  styleUrls: ['./childcaredashboard.page.scss'],
})
export class ChildcaredashboardPage {

  dashboardItems: Array<DashboardItem>;
  constructor(private router: Router) {

    this.dashboardItems = [
      {title: 'Admission', link: 'new-admission', icon: 'person' },
      {title: 'Re-Admission', link: 'childcaredashboard', icon: 'person'},
      {title: 'Discharge', link: 'discharge', icon: 'person' },
      {title: 'Followup', link: 'follow-up', icon: 'person' },
      {title: 'Docto\'s Followup', link: '#', icon: 'person' },
    ];

   }

   openPage(page) {
    this.router.navigateByUrl(page.link);
   }
}
