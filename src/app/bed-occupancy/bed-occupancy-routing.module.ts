import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BedOccupancyPage } from './bed-occupancy.page';

const routes: Routes = [
  {
    path: '',
    component: BedOccupancyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedOccupancyPageRoutingModule {}
