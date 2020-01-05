import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAdmissionPage } from './new-admission.page';

const routes: Routes = [
  {
    path: '',
    component: NewAdmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAdmissionPageRoutingModule {}
