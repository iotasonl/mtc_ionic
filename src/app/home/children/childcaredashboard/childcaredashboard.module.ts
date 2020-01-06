import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildcaredashboardPageRoutingModule } from './childcaredashboard-routing.module';

import { ChildcaredashboardPage } from './childcaredashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildcaredashboardPageRoutingModule
  ],
  declarations: [ChildcaredashboardPage]
})
export class ChildcaredashboardPageModule {}
