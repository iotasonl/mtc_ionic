import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BedOccupancyPageRoutingModule } from './bed-occupancy-routing.module';

import { BedOccupancyPage } from './bed-occupancy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BedOccupancyPageRoutingModule
  ],
  declarations: [BedOccupancyPage]
})
export class BedOccupancyPageModule {}
