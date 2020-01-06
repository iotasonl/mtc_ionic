import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildcaredashboardPage } from './childcaredashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ChildcaredashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildcaredashboardPageRoutingModule {}
